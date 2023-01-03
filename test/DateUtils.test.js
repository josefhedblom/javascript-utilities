import "../Classes/DateUtils";
import { describe, expect, it } from "vitest";

let date = new Date();
let oldDate = new Date("2001-09-11");

describe("#getCurrentDate", () => {
  it("returns the current date (year-month-day)", () => {
    expect(date.getCurrentDate()).toBe("2023-01-03");
  });
});

describe("#getCurrentWeekday", () => {
  it("returns the current weekday", () => {
    expect(date.getCurrentWeekday()).toBe("Tuesday");
  });
});

describe("#getCurrentMonth", () => {
  it("returns the current month", () => {
    expect(date.getCurrentMonth()).toBe("January");
  });
});

describe("#whatWeekday", () => {
  it("returns the weekday", () => {
    expect(oldDate.whatWeekday()).toBe("Tuesday");
  });
});

describe("#whatMonth", () => {
  it("returns the month", () => {
    expect(oldDate.whatMonth()).toBe("September");
  });
});
