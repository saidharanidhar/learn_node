const expect = require("expect"),
  jest = require("jest-mock"),
  rewire = require("rewire");

const app = rewire("./app");

describe("Spies App", () => {
  const db = {
    saveUser: jest.fn()
  };
  app.__set__("db", db);

  it("should call the spy", () => {
    const email = "test@node.com",
      password = "test@123";
    app.handleSignUP(email, password);
    expect(db.saveUser).toHaveBeenCalledWith(email, password);
  });
});
