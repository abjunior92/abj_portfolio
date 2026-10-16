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
  expect(html).toContain("front-end / mobile developer");
  expect(html).toContain('href="https://www.coders51.com/"');
  expect(html).toContain("Coders51");
});

test("elenca le competenze", async () => {
  const html = await renderIndex();

  for (const skill of [
    "ReactJs",
    "Javascript",
    "React Native",
    "HTML",
    "CSS",
    "Objective-C",
  ]) {
    expect(html).toContain(skill);
  }
});

test("mostra il percorso e i contatti", async () => {
  const html = await renderIndex();

  expect(html).toContain("Bologna, Italy");
  expect(html).toContain("ITIS Odone Belluzzi");
  expect(html).toContain("Alma Mater Studiorum");
  expect(html).toContain("June 2017");
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
  expect(html).toContain("@westriver_asd");
  expect(html).toContain('href="https://www.instagram.com/westriver_asd/"');
  expect(html).not.toContain("fanta.soccer");
  expect(html).not.toContain("balùswag");
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
