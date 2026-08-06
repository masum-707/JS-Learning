//using backtick `` ,can include "Enter",variables directly using ${expression}
//Template Literals
const name = "Masum";
const age = 23;
const fav =["Cricket","Football"]
console.log(`My name is ${name}.
Age is ${age}.
Favorite games ${fav}.`);

//Destructuring

const RGB = [255, 128, 0];
const [red, green, blue] = RGB; 
console.log(red); 

// Skipping the middle value & capturing the rest
const [firstColor, , ...remainingColors] = [10, 20, 30, 40];
console.log(remainingColors);