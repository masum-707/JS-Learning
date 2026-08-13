// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log("Hello");
//   }
// }

// const user1 = new User("Masum");
// const user2 = new User("Rahim");

// console.log(user1.name); //masum

// console.log(user1.hasOwnProperty("name")); //true

// console.log(user1.hasOwnProperty("sayHello")); //false

// console.log(user1.sayHello === user2.sayHello); //true but when the function creates sayHello inside the constructor, but true when sayHello is placed on the constructor's prototype.

// console.log(Object.getPrototypeOf(user1) === User.prototype); //true

// console.log(User.prototype.constructor === User); //true

//inheritance

//without class
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.introduce = function () {
//   console.log(`I am ${this.name}`);
// };

// function Student(name, age, studentId) {
//   this.name = name;
//   this.age = age;
//   this.studentId = studentId;
// }

// Student.prototype = Object.create(Person.prototype);
// const student1 = new Student("Masum", 23, 101);
// student1.introduce();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.introduce = function () {
//   console.log(`I am ${this.name}`);
// };

// function Student(name, id) {
//   this.name = name;
//   this.id = id;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function () {
//   console.log(`${this.name} is studying`);
// };

// Student.prototype.constructor = Student;

// const student1 = new Student("Masum", 101);

// console.log(student1.name); //Masum

// console.log(student1.id); //101

// console.log(student1.hasOwnProperty("name")); //true

// console.log(student1.hasOwnProperty("introduce")); //false

// student1.introduce(); //I am Masum

// student1.study(); // Masum is studying

// console.log(Object.getPrototypeOf(student1) === Student.prototype); //true

// console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); //True

// console.log(student1.constructor === Student); //true

//using extends

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }
// const student1 = new Student("Masum");

// student1.introduce();
// student1.study();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, id) {
//     //error ,child class can have a constructor but it should use super(),c
//     // this.name = name;
//     super(name);
//     this.id = id;
//   }
// }
// const student1 = new Student("Masum", 101);

// student1.introduce();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, id) {
//     super(name);
//     this.id = id;
//   }

//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student1 = new Student("Masum", 101);

// console.log(student1.name); //Masum

// console.log(student1.id); //101

// student1.introduce(); //I am Masum

// student1.study(); //Masum is Studying

// console.log(student1.hasOwnProperty("name")); //true

// console.log(student1.hasOwnProperty("introduce")); //false

// console.log(Object.getPrototypeOf(student1) === Student.prototype); //true

// console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); //true

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, id) {
//     super(name, age);

//     this.id = id;
//   }

//   introduce() {
//     super.introduce();

//     console.log(`My student ID is ${this.id}`);
//   }
// }

// const student1 = new Student("Masum", 23, 101);

// student1.introduce();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Person: ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, id) {
//     super(name);
//     this.id = id;
//   }

//   introduce() {
//     super.introduce();
//     console.log(`Student ID: ${this.id}`);
//   }
// }

// const student1 = new Student("Masum", 101);

// console.log(student1.name); //Masum
// console.log(student1.id); //101

// student1.introduce(); //Person : Masum    Student ID: 101
//super(name) to used parent constructor name
//super.introduce(); to used parent method since child has also a method of same name

//Getters and Setters
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }
// const user1 = new User("Masum");

// //user1.userName("Rahim");//Type error
// user1.userName = "Rahim";

// console.log(user1.name);

//Public Fields, Private Fields (#), and Static Fields

class User {
  // public static
  static count = 0;

  // private static
  static #type = "USER";

  // public instance field
  role = "student";

  // private instance field
  #name;

  constructor(name) {
    this.name = name;
    User.count++;
  }

  // getter
  get name() {
    return this.#name;
  }

  // setter
  set name(value) {
    if (!value) {
      throw new Error("Name is required");
    }

    this.#name = value;
  }

  // instance method
  sayHello() {
    console.log(`Hello ${this.#name}`);
  }

  // static method
  static getCount() {
    return User.count;
  }

  // static method accessing private static field
  static getType() {
    return User.#type;
  }
}

const user1 = new User("Masum");
const user2 = new User("Rahim");

console.log(user1.name); //Masum
console.log(user1.role); //Student

user1.name = "Karim";

user1.sayHello(); //Hello Karim

console.log(User.getCount()); //2
console.log(User.getType()); //USER
