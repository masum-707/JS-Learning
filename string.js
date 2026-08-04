//slice
const text ="hello world"
const part = text.slice(6,11);
console.log("2nd part of the text:",part);
console.log(typeof(part));

console.log(text);

//substr(same as slice but can not using negative index)
console.log(text.substr(0,5));

//trim (reduce first and last spaces )
const spaces="   Hello World   "
console.log(spaces.trim());
console.log(spaces.toLowerCase()); //lower case
console.log(spaces.toUpperCase()); //Upper case

// Replace word of the first match,for all change replaceAll()
console.log(text.replace("world","Bangladesh"));

//convert string to array 
//split   ...(" ")per word  ,..("") per character
const stringToarray = text.split(" ");
console.log(stringToarray);

//join used to convert a array in to string 
const arrayToString= stringToarray.join(" ");
console.log(arrayToString);



