import { StringCalculator } from "./stringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the sum of a single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("2")).toBe(2);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("should handle multiple custom delimiters", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });
});
