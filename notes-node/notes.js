console.log("notes.js");

const fs = require("fs");

const FILE = "notes.json";

const NOTEOBJ = {
  notes: {},
  counter: 0
};

const create = () => fs.writeFileSync(FILE, JSON.stringify(NOTEOBJ));

const read = () => JSON.parse(fs.readFileSync(FILE));

const update = obj => fs.writeFileSync(FILE, JSON.stringify(obj));

const getNote = () => {
  try {
    return read();
  } catch (err) {
    create();
    return read();
  }
};

const fetchNote = index => {
  const notesObj = read();
  try {
    return notesObj.notes[index];
  } catch (err) {
    console.log("Not Found");
    return;
  }
};

const updateNote = (obj, index) => {
  const notesObj = read();
  try {
    notesObj.notes[index] = obj;
    update(notesObj);
  } catch (err) {
    console.log("Failed");
  }
};

const addNote = (title, body) => {
  let notesObj = getNote();
  notesObj.notes[notesObj.counter] = { title, body };
  notesObj.counter += 1;
  update(notesObj);
};

const updateIndex = (title = null, body = null, index) => {
  let note = fetchNote(index);
  if (!note) {
    return;
  }
  note.title = title || note.title;
  note.body = body || note.body;
  updateNote(note, index);
};

const view = () => console.log(read());

module.exports = {
  addNote,
  view,
  updateIndex
};
