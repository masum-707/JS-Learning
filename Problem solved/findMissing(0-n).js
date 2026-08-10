//find missing number 0 to n
function findMissing(array) {
  let n = array.length;
  console.log(n);
  let sum = 0;
  for (const num of array) sum += num;
  return (n * (n + 1)) / 2 - sum;
}
const arr = [1, 2];
console.log(findMissing(arr));
