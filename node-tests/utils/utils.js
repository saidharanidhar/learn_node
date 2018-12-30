const add = (a, b) => a + b;

const addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

const square = x => x * x;

const setName = (user, fullName) => {
  const names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports = {
  add,
  addAsync,
  square,
  setName
};
