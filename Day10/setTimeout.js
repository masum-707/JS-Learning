// const timer = setTimeout(() => {
//   //execute immediately and hold for time im ms
//   console.log("hello");
// }, 2000);
// console.log(timer);
// clearTimeout(timer); //stop the execution
function createTimer() {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log("Hello");
    }, 1000);
  };
}
const fn = createTimer();
fn();
fn();
fn();
//only one print cause each time fn call it clear the previous call
