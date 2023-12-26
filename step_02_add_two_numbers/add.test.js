const add = require("./add");

describe("Adding two numbers", () => {
  test("it check the parameters types", () => {
    expect(add("2", "5")).toBe("parameters should be in number");
  });

  test("it should adding two numbers", () => {
    expect(add(2,4)).toBe(6);
  });

});
