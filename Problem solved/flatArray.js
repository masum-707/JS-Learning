function flattenOne(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const value of item) {
        result.push(value);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenOne([1, [2, 3], 4, [5, 6], 7]));
//console.log(arr.flat());
