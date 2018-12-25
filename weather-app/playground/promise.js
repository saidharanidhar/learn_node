const promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Success");
    reject("Promise Failed");
  }, 2500);
});

promiseObj.then(
  body => {
    console.log("Success: ", body);
  },
  error => {
    console.log("Error: ", error);
  }
);

const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") resolve(a + b);
    reject("Not a number");
  });
};

addPromise(4, 5)
  .then(result => {
    return addPromise(result, 10);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
