import "../Classes/ArrayUtils";
import { describe, expect, it } from "vitest";

let array = [1, 2, 3, 4];
let letters = ["b", "a", "c"];

describe("#times", () => {
  it("multiply each element with 5", () => {
    expect(array.times(5)).toEqual([5, 10, 15, 20]);
  });
});

describe("#sum", () => {
  it("sums the total value", () => {
    expect(array.sum()).toEqual(10);
  });
});

describe("#first", () => {
  it("returns the first element", () => {
    expect(array.first()).toEqual(1);
  });
});

describe("#last", () => {
  it("returns the last element", () => {
    expect(array.last()).toEqual(4);
  });
});

describe("#min", () => {
  it("returns the smallet element", () => {
    expect(array.min()).toEqual(1);
  });
});

describe("#max", () => {
  it("returns the biggest element", () => {
    expect(array.max()).toEqual(4);
  });
});

describe("#removeItem", () => {
  it("finds and removes element", () => {
    expect(array.removeItem(3)).toEqual([4, 2, 1]);
  });
});

describe("#sortAlphabeticall", () => {
  it("sorts elements alphabeticall", () => {
    expect(letters.sortAlphabeticall()).toEqual(["a", "b", "c"]);
  });
});
