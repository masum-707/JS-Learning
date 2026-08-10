function zeroToTheEnd(arr) {
  //   console.log(arr.filter((num) => num != 0));
  const newArray = arr.filter((num) => num != 0);
  //   console.log(arr);
  //   console.log(newArray);
  const zero = arr.length - newArray.length;
  for (let i = 0; i < zero; i++) {
    newArray.push(0);
  }
  console.log(newArray);
}

const arr = [0, 1, 0, 3, 12];
zeroToTheEnd(arr);
// console.log(arr.sort((a, b) => b - a)); //it will change the actual sequence on non zero elements
