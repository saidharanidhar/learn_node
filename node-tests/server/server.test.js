const request = require("supertest"),
  expect = require("expect");
var app = require("./server").app;

describe("Server", () => {
  it("should return Hello World", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello World")
      .end(done);
  });

  it("should return Page Not Found", done => {
    request(app)
      .get("/page-not-found")
      .expect(404)
      .expect(res => {
        expect(res.body).toHaveProperty("error", "Page Not Found");
      })
      .end(done);
  });
});
