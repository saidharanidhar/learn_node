const db = require("./db");

const handleSignUP = (email, password) => {
  db.saveUser(email, password);
};

module.exports = {
  handleSignUP
};
