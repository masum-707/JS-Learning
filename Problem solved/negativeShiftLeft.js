function negShift(arr) {
  if (arr.length < 2) return arr;
  const result = [...arr.filter((n) => n < 0), ...arr.filter((m) => m >= 0)];
  return result;
}
const arr = [5, -1, -3, 7, -2, 4];
console.log(negShift(arr));
