import "../Classes/StringUtils";
import { describe, expect, it } from "vitest";

let person = "josef hedblom";
let emptyString = "";

describe("#capitalizeFirstLetter", () => {
  it("capitalize the first letter of a string", () => {
    expect(person.capitalizeFirstLetter()).toBe("Josef hedblom");
  });
});

describe("#titleize", () => {
  it("titleize the first letter of each word", () => {
    expect(person.titleize()).toBe("Josef Hedblom");
  });
});

describe("#isEmpty", () => {
  it("checks that the string is empty", () => {
    expect(emptyString.isEmpty()).toBe(true);
  });
  it("checks that the string is not empty", () => {
    expect(person.isEmpty()).toBe(false);
  });
});

describe("#extractWord", () => {
  it("finds heblom and extracts it", () => {
    expect(person.extractWord("hedblom")).toBe("hedblom");
  });
});
