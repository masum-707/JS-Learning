function rotated(arr, k) {
  k = k % arr.length;
  const result = [
    ...arr.slice(arr.length - k),
    // ...arr.splice(0, arr.length - k),//modify orginal array
    ...arr.slice(),
  ];
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotated(arr, 3));
