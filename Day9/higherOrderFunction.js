// A function is a higher-order function if it does at least one of these:
// Takes a function as an argument
// Returns a function

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function execute(fn) {
//   fn("Masum");
// }

// execute(greet);

function double(num) {
  return num * 2;
}
function processNumbers(arr, operation) {
  const result = [];

  for (const num of arr) {
    result.push(operation(num));
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];
const result = processNumbers(numbers, double);

console.log(result);
