//basic loop and includes()
function uniqueArray(arr) {
  const noDuplicates = [];
  for (num of arr) {
    if (!noDuplicates.includes(num)) {
      noDuplicates.push(num);
    }
  }
  return noDuplicates;
}

const duplicateArray = [1, 8, 3, 7, 1, 4, 8];
console.log(uniqueArray(duplicateArray));
//optimal using set
//console.log(new Set(duplicateArray)); //return object
//for array
console.log([...new Set(duplicateArray)]);
//console.log(isNaN("You")); //true
