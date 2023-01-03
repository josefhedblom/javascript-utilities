import "../Classes/NumberUtils";
import { describe, expect, it } from "vitest";

let evenNumber = 2;
let oddNumber = 3;

describe("#isEven", () => {
  it("returns true if number is even", () => {
    expect(evenNumber.isEven()).toEqual(true);
  });
});

describe("#isOdd", () => {
  it("returns true if number is odd", () => {
    expect(oddNumber.isOdd()).toEqual(true);
  });
});
