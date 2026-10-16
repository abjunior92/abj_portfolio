import { expect, test } from "vitest";
import { resolveTheme } from "../src/data/theme";

test("segue il tema del sistema se non c'è una scelta salvata", () => {
  expect(resolveTheme(null, true)).toBe("dark");
  expect(resolveTheme(null, false)).toBe("light");
});

test("una scelta salvata prevale sul sistema", () => {
  expect(resolveTheme("light", true)).toBe("light");
  expect(resolveTheme("dark", false)).toBe("dark");
  expect(resolveTheme("altro", true)).toBe("dark");
});
