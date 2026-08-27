// const numbers = [10, 20, 30];
// const user = {
//   name: "Masum",
//   age: 25,
// };
// console.log(numbers[Symbol.iterator]); //[Symbol.iterator]-> return a function ,,will be iterator else not iterable
// console.log(user[Symbol.iterator]);

// const numbers = [10, 20, 30];

// const iterator = numbers[Symbol.iterator]();

// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const iterator = {
  current: 0,
  next() {
    if (this.current < 5) {
      return {
        value: this.current++,
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  },
};
// const result = iterator.next();
// console.log(result);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
