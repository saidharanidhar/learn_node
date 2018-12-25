const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());
hbs.registerHelper("upperCase", text => text.toUpperCase());
app.set("view engine", hbs);

app.use((req, res, next) => {
  const log = `${new Date().toString()} ${req.method} ${req.path} \n`;
  fs.appendFile("server.log", `${log}`, err => {
    if (err) {
      console.log("Unable to log into file");
    }
    console.log(log);
    next();
  });
});

app.use((req, res, next) => {
  res.render("maintainence.hbs");
});

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  //   res.send("Hello Express!");
  res.send({
    name: "First Route",
    context: "Hello Express!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "Page Title",
    pageTitle: "Some Text"
  });
});

app.get("/bad", (req, res) => {
  res
    .send({
      badRequest: "Error 404 Bad Request"
    })
    .status(400);
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
