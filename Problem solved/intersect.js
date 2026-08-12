// function intersect(arr1, arr2) {
//   const result = [];
//   for (const num of arr1) {
//     if (arr2.includes(num) && !result.includes(num)) {
//       result.push(num);
//     }
//   }
//   return result;
// }
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
const a = [4, 2, 7, 2, 9];
const b = [2, 4, 8];
console.log(intersect(a, b));
//using set
function intersect(arr1, arr2) {
  const set2 = new Set(arr2);
  const seen = new Set();
  const result = [];

  for (const num of arr1) {
    if (set2.has(num) && !seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }

  return result;
}
