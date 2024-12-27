import { describe, expect, it } from "vitest";

import { isNumber } from "📖/number.utils";
// #endregion --------------------------------------------------------------------------------------
// #region NUMBER TESTS
// -----------------------------------------------------------------------------------------------*/
describe("isNumber test #1", () => {
  it("isNumber(0) must return true", () => {
    expect(isNumber(0)).toEqual(true);
  });
});

describe("isNumber test #2", () => {
  it("isNumber(5) must return true", () => {
    expect(isNumber(5)).toEqual(true);
  });
});

describe("isNumber test #3", () => {
  it("isNumber('0') must return true", () => {
    expect(isNumber("0")).toEqual(true);
  });
});

describe("isNumber test #4", () => {
  it("isNumber('5') must return true", () => {
    expect(isNumber("5")).toEqual(true);
  });
});

describe("isNumber test #5", () => {
  it("isNumber('-5') must return true", () => {
    expect(isNumber("-5")).toEqual(true);
  });
});

describe("isNumber test #6", () => {
  it("isNumber('a') must return true", () => {
    expect(isNumber("a")).toEqual(false);
  });
});

// #endregion --------------------------------------------------------------------------------------
