const str = "I love Bnagladesh";

//slice move left to right
console.log(str.slice(2, 6)); //love
console.log(str.slice(2)); //index 2 to last
console.log(str.slice(2, -11)); // ignore the last 11 char
console.log(str.slice(6, 4)); //  no valid range,return empty string
console.log(str.slice(-15, 6)); //  love

//substring
console.log("SubString");
console.log(str.substring(2, 6)); //love
console.log(str.substring(2)); //index 2 to last
console.log(str.substring(2, -11));
// Step 1: Negative becomes 0 -> (2, 0)
// Step 2: Swapped because 2 > 0 -> (0, 2)
// Extracts from index 0 to 2.
console.log(str.substring(6, 4)); // Swapped because 4 > 6 -> (4, 6)
console.log(str.substring(-15, 6));
