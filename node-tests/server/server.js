const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/page-not-found", (req, res) => {
  res.status(404).send({ error: "Page Not Found", status: 404 });
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});

module.exports.app = app;
