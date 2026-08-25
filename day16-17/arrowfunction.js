// this.seconds = 5;//global ,work in browser environment
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds); //does have own this,search in parent>grandparent>.....lexically upper
  }, 1000);
}
Timer();
// console.log(this);
