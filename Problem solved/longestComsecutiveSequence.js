function longestSequence(arr) {
  if (arr.length === 0) return 0;

  const arr1 = arr.sort((a, b) => a - b);

  let count = 1;
  let long = 1;

  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] === arr1[i + 1]) {
    } else if (arr1[i] + 1 === arr1[i + 1]) {
      count++;
    } else {
      count = 1;
    }

    if (long < count) {
      long = count;
    }
  }

  return long;
}

const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestSequence(arr));
