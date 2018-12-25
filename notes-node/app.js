console.log("app.js");

const _ = require("lodash");
const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
const command = argv._[0];
console.log(command);
if (command === "addNote") {
  notes.addNote((title = argv.title), (body = argv.body));
} else if (command === "view") {
  notes.view();
} else if (command === "update") {
  notes.updateIndex(
    (title = argv.title),
    (body = argv.body),
    (index = argv.index)
  );
} else {
  console.log(`Command ${command} not found`);
}
