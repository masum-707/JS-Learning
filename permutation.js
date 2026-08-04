function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function permutation(arr, start, end) {
  if (start === end) {
    console.log(arr.join(""));
  }

  for (let i = start; i <= end; i++) {
    swap(arr, start, i);
    permutation(arr, start + 1, end);
    swap(arr, start, i);
  }
}

let arr = ["A", "B", "C", "D"];

permutation(arr, 0, arr.length - 1);
