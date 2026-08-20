//let timerId = setTimeout(callback, delay, param1, param2, ...);

// const timerId = setTimeout(
//   (user) => {
//     console.log(`Hello, ${user}!`);
//   },
//   2000,
//   "Alice",
// );

// To cancel the execution before 2 seconds pass:
// clearTimeout(timerId);
const user1 = {
  name: "Masum",
  age: 25,
  city: "Narsingdi",
};
function getUserName(us) {
  console.log(us.name);
}
// console.log(getUserName(user1));

const timerId = setTimeout(getUserName, 2000, user1);
clearTimeout(timerId);

//let intervalId = setInterval(callback, delay, param1, param2, ...);
const intervalId = setInterval(getUserName, 1000, user1); //continuously execute after every 1s
//clearInterval(intervalId); // Stops the loop entirely
