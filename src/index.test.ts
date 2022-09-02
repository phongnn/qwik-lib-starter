import { add, multiply } from ".";

describe("add", () => {
  it("should work", () => {
    expect(add(1, 1)).toBe(2);
  });
});

describe("multiply", () => {
  it("should work", () => {
    expect(multiply(3, 2)).toBe(6);
  });
});
