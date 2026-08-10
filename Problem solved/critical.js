// const arr = [10, 20, 30];

// console.log(arr["0"]);
// console.log(arr[0]);
// console.log(arr["1"]);
// console.log(arr["01"]);

// const arr = [10, 20, 30];

// arr[5] = 100;

// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]);
// console.log(arr[4]);

// const arr = [10, 20, 30];

// delete arr[2];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

// const a = [1, 2, 3];
// const b = a;

// b[0] = 100;

// console.log(a);
// console.log(b);

// const a = [
//   [1, 2],
//   [3, 4],
// ];

// const b = [...a];

// b[0][0] = 100;

// console.log(a);
// console.log(b);

//Two sum
// const arr = [3, 7, 11, 15, 6];
// const target = 9;
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == 9) {
//       console.log(i, j);
//       break;
//     }
//   }
// }

// let s = "Masum";
// s[0] = "n"; //not changed ,string is immutable
// console.log(s);
// //for change
// //let ss = s.replace("M", "N");
// let ss = ""; //empty string
// ss = "N" + s.slice(1, 5); //string concatenation
// console.log(ss);

// removeSpaces = "J a v a S c r i p t";
// console.log(removeSpaces.replaceAll(" ", ""));
// console.log(removeSpaces); //remain same ,cause string immutable

// finding vowel from a string
// function numberOfVowel(str) {
//   let str1 = str.toLowerCase();
//   console.log(str1);
//   let vowel = "aeiou";
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (vowel.includes(str1[i])) count++;
//   }
//   return count;
// }

// const str = "Hello wOrld";
// console.log(numberOfVowel(str));

//find 2nd largest value
function secondLargest(arr) {
  const values = arr.filter((num) => num !== undefined);
  if (values.length < 2) {
    return "At least two value required";
  }
  let largest = -Infinity;
  let second = -Infinity;
  for (let num of values) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else {
      second < num && num !== largest ? (second = num) : second;
    }
  }
  return second !== -Infinity ? second : "All value same";
}
const array = [-1, 1, 1, 2, 2, , , , , -1];
console.log(secondLargest(array));
