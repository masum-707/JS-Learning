// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User("Masum", 23);
// const user2 = new User("Rahim", 25);

// console.log(user1);
// console.log(user2);

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.greet = function () {
//     console.log(`Hi, I am ${this.name}`); //not work
//   };
// }
// const user1 = new User("Masum", 23);
// const user2 = new User("Rahim", 25);
// user1.greet;

// function User(name) {
//   this.name = name;
// }

// User.prototype.greet = function () {
//   console.log("Hello");
// };

// const user1 = new User("Masum");
// user1.greet();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.greet = function () {
//   console.log(`Hi ${this.name}`);
// };
// console.log(User.prototype);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHello = function () {
//   //added method using prototype to the User
//   console.log(`Hello, I am ${this.name}`);
// };
// const user1 = new User("Masum", 23);
// const user2 = new User("Rahim", 25);

// user1.sayHello();
// user2.sayHello();
// console.log(user1.hasOwnProperty("name")); //yes ,true
// console.log(user1.hasOwnProperty("sayHello")); //no,false
// console.log(Object.getPrototypeOf(user1));

function User(name) {
  this.name = name;

  this.sayHello = function () {
    return `Hello ${name}`;
  };
}
const user1 = new User("Masum");
const user2 = new User("Rahim");
console.log(user2.sayHello());
