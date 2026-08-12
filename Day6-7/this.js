// function greet() {
//   console.log(this.name);
// }

// const person1 = {
//   name: "Masum",
//   greet:greet,
// };

// const person2 = {
//   name: "Rahim",
//   greet,
// };

// person1.greet();
// person2.greet();
// greet();

// function User(a, b) {
//     this.a = a;
//     this.b = b;
// }
// const user1=new User(4,3);
// console.log(user1);

// const person = {
//   name: "GeeksforGeeks",
//   greet: () => {
//     return `Welcome To, ${this.name}`;
//   },
// };
// console.log(person.greet());
// person.name = "SCT Bangla";
// console.log(person.greet());

// function User(name) {
//   this.name = name;

//   console.log(this.name);
// }

// // const user1 = new User("Masum");

// // console.log(user1);
// User("masum");

// function User(name) {
//   this.name = name;

//   this.greet = function () {
//     console.log(this.name);
//   };
// }

// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const p = new Person("Masum");

// function Person(name) {
//   this.name = name;
// }

// Person("Masum");

// function Person(name) {
//   this.name = name;

//   this.show = function () {
//     console.log(this.name);
//   };
// }

// const p = new Person("Masum");

// p.show();

// const arrow = () => {
//   console.log(this.name);
// };

// const user = {
//   name: "Masum",
// };

// arrow.call(user);

function outer() {
  console.log(this);

  function inner() {
    console.log(this);
  }

  inner();
}
