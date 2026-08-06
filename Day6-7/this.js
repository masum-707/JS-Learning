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

const person = {
    name: "GeeksforGeeks",
    greet() {
        return `Welcome To, ${this.name}`;
    }
};
console.log(person.greet());
person.name ="SCT Bangla";
console.log(person.greet());