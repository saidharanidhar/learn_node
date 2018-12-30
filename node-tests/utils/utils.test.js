const expect = require("expect"),
  utils = require("./utils");

describe("Utils", () => {
  describe("Add Numbers", () => {
    it("Should add two numbers", () => {
      const res = utils.add(2, 1);
      expect(res).toBe(3);
      expect(typeof res).toBe("number");
    });

    it("should add two numbers async", done => {
      utils.addAsync(2, 3, res => {
        expect(res).toBe(5);
        done();
      });
    });
  });

  it("should square a number", () => {
    const res = utils.square(3);
    expect(res).toBe(9);
    expect(typeof res).toBe("number");
  });

  it("should return a user object", () => {
    const user = {},
      fullName = "Hello World",
      res = utils.setName(user, fullName);
    expect(res).toHaveProperty("firstName", "Hello");
  });
});
