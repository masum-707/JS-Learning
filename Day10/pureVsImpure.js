//pure function
const add = (a, b) => a + b;
const square = (x) => x * x;
console.log(square(4));

//Impure
function random(value) {
  return Math.random() * value;
}
console.log(random(5)); //same input different value

let count = 0;
function inCri() {
  count++;
}
inCri();
console.log(count); //change count value 0 to 1
