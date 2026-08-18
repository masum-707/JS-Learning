// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// const promise = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// promise.then((result) => {
//   console.log(result);
// });
// console.log(promise);
// const p1 = Promise.resolve(10);

// const p2 = p1.then((value) => {
//   return 20;
// });
// console.log(p1);
// console.log(p2);

// const p1 = Promise.resolve(10);

// const p2 = p1.then((value) => {
//   console.log("then callback");
//   return 20;
// });

// console.log("p2:", p2);

// queueMicrotask(() => {
//   console.log("later:", p2);
// });

const p1 = Promise.resolve(10);

const p2 = p1.then((value) => {
  //throw new Error("Failed");
  return 0;
});
queueMicrotask(() => {
  console.log("later:", p2);
});

p2.catch((error) => {
  console.log(error.message);
});
console.log(p2);
