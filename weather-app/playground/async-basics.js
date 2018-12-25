console.log("Starting app");

setTimeout(() => {
  console.log("Inside of Call Back");
}, 2000);

setTimeout(() => {
  console.log("Inside of Call Back2");
}, 0);

console.log("Finishing up");
