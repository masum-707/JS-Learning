//plain object

const user = {
  name: "Masum",
  age: 18,
  //   [Symbol.iterator]() {
  //     const values = [this.name, this.age];
  //     return values[Symbol.iterator]();
  //   },
};

//we can use for..of since the is [Symbol.iterator]
// console.log(typeof user[Symbol.iterator]), if function then it will be iterator

// for (const value of user) {
//   console.log(value);
// }
console.log({ ...user });

// const iterator = user[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
