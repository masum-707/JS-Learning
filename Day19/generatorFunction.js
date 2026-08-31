// // function* test() {
// //   console.log("A");
// //   yield 10;
// //   console.log("B");
// //   yield 20;
// //   console.log("C");
// // }
// // // test().next();
// // const store = test();
// // console.log(store.next());
// // console.log(store.next());
// // // console.log(typeof store);

// function* test() {
//   console.log("Initial");
//   const a = yield "First";
//   console.log(1000);

//   const b = yield a * 2;

//   // return b;
// }
// const gen = test();

// console.log(gen.next());
// console.log(gen.next(10));
// console.log(gen.next(50));
// console.log(gen.next());
// console.log(gen.next());

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* letters() {
  yield "A";
  yield "B";
  yield "C";
}

function* all() {
  console.log("Test start");
  yield* numbers();
  console.log("Test middle");
  yield* letters();
  console.log("Test end");
}
const gen = all();

for (const value of gen) {
  console.log(value);
}
