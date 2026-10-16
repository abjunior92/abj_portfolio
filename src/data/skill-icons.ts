import {
  siAstro,
  siBitbucket,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siJira,
  siMysql,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

const skillIcons: Record<string, string> = {
  ReactJs: siReact.path,
  VueJs: siVuedotjs.path,
  Javascript: siJavascript.path,
  Typescript: siTypescript.path,
  HTML: siHtml5.path,
  CSS: siCss.path,
  TailwindCSS: siTailwindcss.path,
  Astro: siAstro.path,
  GitHub: siGithub.path,
  Bitbucket: siBitbucket.path,
  GitLab: siGitlab.path,
  Jira: siJira.path,
  Git: siGit.path,
  Docker: siDocker.path,
  PostgreSQL: siPostgresql.path,
  MySQL: siMysql.path,
  Prisma: siPrisma.path,
};

export function skillIcon(name: string) {
  return skillIcons[name];
}
