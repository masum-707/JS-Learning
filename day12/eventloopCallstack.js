// function one() {
//   console.log("one");
// }

// function two() {
//   one();
//   console.log("two");
// }

// two();

// console.log("three");

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");
// function one() {
//   console.log("one");
// }

// function two() {
//   one();
//   console.log("two");
// }

// two();

// console.log("three");
// setTimeout(() => {
//   console.log("j");
// }, 0);
// function one() {
//   console.log("one");
// }

// function two() {
//   one();
//   console.log("two");
// }

// two();

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise Resolved");
// });

console.log("A");
setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);
function n() {
  console.log("Z");
}
n();
Promise.resolve().then(() => {
  console.log("D");
});
Promise.resolve().then(() => {
  console.log("E");
});
console.log("F");

//predict AFDEBC
