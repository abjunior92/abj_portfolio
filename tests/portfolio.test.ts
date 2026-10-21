import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Index from "../src/pages/index.astro";

async function renderIndex() {
  const container = await AstroContainer.create();
  return container.renderToString(Index);
}

test("mostra nome, ruolo e datore di lavoro", async () => {
  const html = await renderIndex();

  expect(html).toContain("Andrea Junior Berselli");
  expect(html).toContain("Software engineer (Frontend developer)");
  expect(html).toContain('href="https://www.coders51.com/"');
  expect(html).toContain("Coders51");
});

test("raggruppa le competenze in sezioni", async () => {
  const html = await renderIndex();

  expect(html).toContain("Languages and frameworks");
  expect(html).toContain("Previous skills");
  expect(html).toContain("Next skills");
  expect(html).toContain('class="hash"');
  expect(html).toContain('class="brand"');
  for (const skill of [
    "ReactJs",
    "VueJs",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Astro",
  ]) {
    expect(html).toContain(skill);
  }

  expect(html).toContain("Interface and accessibility");
  expect(html).toContain("UI/UX");
  expect(html).toContain("Accessible development");
  expect(html).not.toContain("The languages and frameworks behind the interfaces.");

  expect(html).toContain("Repositories");
  expect(html).toContain("Bitbucket");
  expect(html).toContain("GitLab");

  expect(html).toContain("Delivery and agile work");
  expect(html).toContain("CI/CD");
  expect(html).toContain("Jira");
  expect(html).toContain("Sprints");

  expect(html).toContain("AI and agents");
  expect(html).toContain("agents");
});

test("mostra il percorso e i contatti", async () => {
  const html = await renderIndex();

  expect(html).toContain("Bologna, Italy");
  expect(html).toContain('class="presentation"');
  expect(html).toContain('class="timeline"');
  expect(html).toContain("I am a motivated, curious, and passionate person.");
  expect(html).toContain('href="#skills-heading"');
  expect(html).toContain(">Skills<");
  expect(html).toContain('href="#about"');
  expect(html).toContain('href="#blog"');
  expect(html).toContain('href="#contact"');
  expect(html).toContain("Menu");
  expect(html).toContain("Close menu");
  expect(html).toContain("ITIS Odone Belluzzi");
  expect(html).toContain("Alma Mater Studiorum");
  expect(html).toContain("June 2017");
  expect(html).toContain("Accessibility is for people");
  expect(html).toContain('href="https://www.coders51.com/blog/a11y/"');
  expect(html).toContain("Astro JS - the birth of the coders51 blog");
  expect(html).toContain('href="https://www.coders51.com/blog/astro-blog/"');
  expect(html).toContain('href="https://github.com/abjunior92"');
  expect(html).toContain("mailto:junior.berselli@gmail.com");
  expect(html).toContain(
    'href="https://www.linkedin.com/in/andrea-junior-berselli-263678b6/"',
  );
  expect(html).toContain("https://api.whatsapp.com/send?phone=+393334805262");
  expect(html).toContain('href="http://telegram.me/bersax"');
  expect(html).toContain('href="https://www.facebook.com/BersaX8"');
  expect(html).toContain('href="https://www.instagram.com/bers_abj/?hl=it"');
  expect(html).toContain("Baskin Player");
  expect(html).toContain("westriver_asd");
  expect(html).toContain('href="https://www.instagram.com/westriver_asd/"');
  expect(html).not.toContain("fanta.soccer");
  expect(html).not.toContain("balùswag");
});

test("mostra i progetti sotto About Me", async () => {
  const html = await renderIndex();
  const about = html.indexOf('id="about"');
  const projects = html.indexOf('id="projects"');
  const blog = html.indexOf('id="blog"');

  expect(about).toBeGreaterThan(-1);
  expect(projects).toBeGreaterThan(about);
  expect(blog).toBeGreaterThan(projects);
  expect(html).toContain('href="#projects"');
  expect(html).toContain(">Projects<");
  expect(html).toContain("Longara Tournament Board");
  expect(html).toContain(
    "A management platform for the Longara 3vs3 basketball tournament: an admin panel and a view for guests and players. A board that shows the general information, notices, sponsors, food, and more. A way to make a basketball tournament even more engaging for young people, giving participants statistics, standings, and much more.",
  );
  expect(html).toContain('src="/logo-longara.jpg"');
  expect(html).toContain(
    'href="https://basket-playground.fly.dev/playground/showcase"',
  );
});

test("offre il passaggio tra tema chiaro e scuro", async () => {
  const html = await renderIndex();

  expect(html).toContain('type="button"');
  expect(html).toContain("Switch to dark theme");
  expect(html).toContain("Switch to light theme");
});

test("pubblica i metadati SEO del sito", async () => {
  const html = await renderIndex();

  expect(html).toContain('<html lang="en">');
  expect(html).toContain("Abj - Portfolio");
  expect(html).toContain("My Personal Portfolio");
  expect(html).toContain("https://abjportfolio.netlify.app");
  expect(html).toContain("uKWb6x3jOGOyfwL9_P4sHu6sUXsMW5vpX6KmNEOWWSs");
});
