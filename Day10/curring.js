// // Standard function
// const multiply = (a, b) => a * b;
// multiply(2, 5); // 10

// // Curried function
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(2)(5); // 10

// function add(a, b) {
//   return a + b;
// }
// function currAdd(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const addTwo = currAdd(2);
// console.log(addTwo(5));

// Standard function
const multiply = (a, b) => a * b;
multiply(2, 5); // 10

// Curried function
const curriedMultiply = (a) => (b) => (C) => a * b * C;
console.log(curriedMultiply(2)(5)(4)); // 10

//COMPOSE FUNCTION
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;
console.log(square(double(addOne(2))));

//with compose
function compose(f, g, h) {
  return function (x) {
    return f(g(h(x)));
  };
}
const process = compose(square, double, addOne);

console.log(process(3));

//modern approach
// function compose(...functions) {
//     return function(value) {
//         return functions.reduceRight(
//             (result, fn) => fn(result),
//             value
//         );
//     };
// }
