/*
//create array
const array = [1, 2, 3, 4, 5];
const array2 = new Array("Red", "Blue", "Green");
//access elements
console.log(array[0]); //1
console.log(array2[1]); //Blue

//using loops
console.log("Array elements:");
for (let element of array) {
  console.log(element);
}

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

//change array elements to string using toString
console.log(array2.toString());
*/
//array method push,pop,shift,unshift ,slice ,splice

const number = [2, 4, 7, 8, 10];
const fruits = ["Apple", "Banana", "Orange"];
console.log("Original number array :", number);
// add 12 in the last
number.push(12);
console.log("After pushing 12:", number);
//added 0 in the first index
number.unshift(0);
console.log("After unshifting 0:", number.toString()); //convert array to the string
//pop
number.pop();
console.log("After popping:", number);
number.shift();
console.log("After shifting:", number);
//merge arrays using concat
const mergeArray = number.concat(fruits);
console.log("Merged array:", mergeArray);

//sub array using slice
const subarray = mergeArray.slice(2, 7); //start from index 2 and end before 7
console.log("Sub array:", subarray);

//splice ,change the orginal array too
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const spliced = arr.splice(3, 2); //start from 3 and after 2 index
console.log("Spliced elements:", spliced);
console.log("After splicing:", arr); //original array is modified



let colors = ["red", "blue", "green", "yellow"];

// Start at -2 (green), delete 1 item (green), and insert "purple"
colors.splice(-2, 2, "purple","orange") ;

console.log(colors); 
// Output: ["red", "blue", "purple", "yellow"]
