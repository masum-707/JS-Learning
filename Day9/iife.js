// //normal function execute process
// function greet() {
//   console.log("Hello1");
// }

// greet();

// //IIFE  --- immediately call the function
// (function greet() {
//   console.log("Hello2");
// })();
// // can be written without name
// (function () {
//   console.log("Hello3");
// })();

// //Passing arguments to an IIFE
// (function (name) {
//   console.log(`Hello ${name}`);
// })("Masum");

//IIFE + closure
const counter = (function () {
  let count = 0;

  return function () {
    count++;
    return count;
  };
})();
