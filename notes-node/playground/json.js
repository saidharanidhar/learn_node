// let obj = {
//   name: "Sai Dharanidhar"
// };

// console.log(typeof obj);
// let stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// let personString = '{"name":"Sai Dharanidhar", "age":21}';
// let obj = JSON.parse(personString);
// console.log(typeof obj);
// console.log(obj);

const fs = require("fs");

let originalNote = {
  title: "some title",
  body: "some body"
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

let noteString = fs.readFileSync("notes.json");

let noteObj = JSON.parse(noteString);
console.log(noteObj.title);
console.log(noteObj.body);
