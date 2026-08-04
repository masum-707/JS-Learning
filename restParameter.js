function add(a, b = 2) {
  //b=2 default parameter
  return a + b;
}
const x = add(5, 7, 4); //only take the first two arguments
console.log(x);
function multiplication(a, b, ...numbers) {
  let result = a * b;
  // console.log(numbers);
  for (let number of numbers) {
    result *= number;
  }
  console.log(result);
}
multiplication(2, 3); //after arguments ,all other will be stored as a numbers array
