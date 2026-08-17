// function one() {
//   console.log("one");
// }

// function two() {
//   one();
//   console.log("two");
// }

// two();

// console.log("three");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

two();

console.log("three");
setTimeout(() => {
  console.log("j");
}, 0);
function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

two();
