export type ContributionDay = {
  date: string;
  level: number;
  label?: string;
};

export type ContributionGraph = {
  contributionsYear: number | null;
  days: ContributionDay[];
};

export type GithubActivity = ContributionGraph & {
  publicCommits: number | null;
  publicPullRequests: number | null;
  publicRepos: number | null;
};

const emptyGraph = (): ContributionGraph => ({
  contributionsYear: null,
  days: []
});

export function parseContributions(html: string): ContributionGraph {
  const total = html.match(/([\d,]+)\s+contributions\s+in the last year/i);
  const labels = new Map<string, string>();
  for (const tip of html.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    labels.set(tip[1], tip[2].trim());
  }

  const days: ContributionDay[] = [];

  for (const tag of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/g)) {
    const date = tag[0].match(/data-date="([^"]+)"/)?.[1];
    const level = tag[0].match(/data-level="(\d)"/)?.[1];
    const id = tag[0].match(/\bid="([^"]+)"/)?.[1];
    if (!date || level === undefined) continue;
    const label = id ? labels.get(id) : undefined;
    days.push(label ? { date, level: Number(level), label } : { date, level: Number(level) });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));

  return {
    contributionsYear: total ? Number(total[1].replaceAll(",", "")) : null,
    days
  };
}

export function toWeekColumns(days: ContributionDay[]): Array<Array<ContributionDay | null>> {
  if (days.length === 0) return [];

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const first = new Date(`${sorted[0].date}T00:00:00Z`);
  const pad = first.getUTCDay();
  const cells: Array<ContributionDay | null> = [...Array<null>(pad).fill(null), ...sorted];
  const columns: Array<Array<ContributionDay | null>> = [];

  for (let index = 0; index < cells.length; index += 7) {
    const column = cells.slice(index, index + 7);
    while (column.length < 7) column.push(null);
    columns.push(column);
  }

  return columns;
}

async function readCount(url: string): Promise<number | null> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "abj-portfolio"
    }
  });
  if (!response.ok) return null;
  const body = (await response.json()) as { total_count?: number };
  return typeof body.total_count === "number" ? body.total_count : null;
}

export async function loadGithubActivity(login: string): Promise<GithubActivity> {
  const [graphResult, profileResult, commits, pullRequests] = await Promise.all([
    fetch(`https://github.com/users/${login}/contributions`, {
      headers: {
        Accept: "text/html",
        "User-Agent": "Mozilla/5.0"
      }
    }),
    fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "abj-portfolio"
      }
    }),
    readCount(
      `https://api.github.com/search/commits?q=${encodeURIComponent(`author:${login}`)}&per_page=1`
    ),
    readCount(
      `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${login} type:pr`)}&per_page=1`
    )
  ]);

  const graph = graphResult.ok ? parseContributions(await graphResult.text()) : emptyGraph();
  const profile = profileResult.ok
    ? ((await profileResult.json()) as { public_repos?: number })
    : null;

  return {
    ...graph,
    publicCommits: commits,
    publicPullRequests: pullRequests,
    publicRepos: typeof profile?.public_repos === "number" ? profile.public_repos : null
  };
}
