// simple callback function
// function add(a, b, callback) {
//   if (a < 0 || b < 0) {
//     callback("Negative number");
//     return;
//   }

//   const result = a + b;
//   callback(null, result);
// }

// add(5, 6, fn);

// function fn(error, value) {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(value);
// }

function add(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Negative number");
      return;
    }

    const result = a + b;
    resolve(result);
  });
}

// add(5, -20)
//   .then(print)
//   .catch((err) => {
//     console.log(err);
//   });
// add(5, -20).then(print).catch(print); //using common function

function print(value) {
  console.log(value);
}

function multiply(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Negative number in multiply");
      return;
    }

    resolve(a * b);
  });
}

add(5, 20)
  .then((value) => multiply(value, 5)) //must be a return ,since arrow function it will return automatically
  //   .then((value) => {
  //     return multiply(value, 5);
  //   })
  .then((num) => add(num, 8))
  .then(print)
  .catch(print);
