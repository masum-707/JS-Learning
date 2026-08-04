const add = (a, b, ...numbers) => {
  //using rest parameter
  let result = a + b;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

const subtract = (a, b) => {
  //using arrow function
  return a - b;
};

const multiplication = (a, b = 1, ...numbers) => {
  //using default parameter
  let result = a * b;
  for (let number of numbers) {
    result *= number;
  }
  return result;
};

const division = (a, b) => {
  return a / b;
};
const modulus = (a, b) => {
  return a % b;
};

console.log("Addition:", add(505, 333, 89));
console.log("Subtraction:", subtract(379, 100));
console.log("Multiplication:", multiplication(5));
console.log("Division:", division(10, 3));
console.log("Modulus:", modulus(20, 3));
