const { add, subtract, multiply } = require("./calculator.js");

describe("Calculator", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      expect(add(10, 5)).not.toBe(15);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(10, 5)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(10, 5)).toBe(50);
    });
  });
});
