export type ThemeChoice = "light" | "dark";

export function resolveTheme(stored: string | null, prefersDark: boolean): ThemeChoice {
  if (stored === "light" || stored === "dark") return stored;
  return prefersDark ? "dark" : "light";
}
