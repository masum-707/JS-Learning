//Map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//filter 
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

//reduce 
const total =numbers.reduce((acc,cur)=>acc+=cur,0);
console.log("Total using reduce:",total);


//forEach
numbers.forEach((num)=> console.log(num));  //print 1st to last

//find 
console.log("After filter:");
const found = numbers.find((n) => n > 3);
console.log(found); // 4

//some 
const isMatch = numbers.some(num=>num===4);
console.log(isMatch);

//every 
console.log(numbers.every(num=>num===2));
