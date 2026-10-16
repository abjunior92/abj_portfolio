import { expect, test } from "vitest";
import { parseContributions, toWeekColumns } from "../src/data/github";

test("legge totale e giorni dal calendario di GitHub", () => {
  const html = `
    <h2>1,142 contributions in the last year</h2>
    <td class="ContributionCalendar-day" data-date="2025-10-12" id="day-0" data-level="0"></td>
    <tool-tip for="day-0">No contributions on October 12th.</tool-tip>
    <td class="ContributionCalendar-day" data-level="3" id="day-1" data-date="2025-10-13"></td>
    <tool-tip for="day-1">4 contributions on October 13th.</tool-tip>
  `;

  expect(parseContributions(html)).toEqual({
    contributionsYear: 1142,
    days: [
      { date: "2025-10-12", level: 0, label: "No contributions on October 12th." },
      { date: "2025-10-13", level: 3, label: "4 contributions on October 13th." }
    ]
  });
});

test("mette i giorni in colonne da domenica a sabato", () => {
  const columns = toWeekColumns([
    { date: "2025-10-12", level: 1 },
    { date: "2025-10-13", level: 2 }
  ]);

  expect(columns[0]?.[0]?.level).toBe(1);
  expect(columns[0]?.[1]?.level).toBe(2);
  expect(columns[0]?.[2]).toBeNull();
  expect(columns[0]).toHaveLength(7);
});
