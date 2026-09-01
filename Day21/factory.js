// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class UserFactory {
//   static create(name, age) {
//     return new User(name, age);
//   }
// }
// const user1 = UserFactory.create("Masum", 25);
// const user2 = UserFactory.create("Ehan", 20);
// console.log(user1, user2);

class RegularUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "User";
    this.permissions = ["read"];
  }
}

class AdminUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "Admin";
    this.permissions = ["read", "write", "delete"];
  }
}

class UserFactory {
  static create(name, age, role = "regular") {
    if (role === "admin") {
      return new AdminUser(name, age);
    }
    return new RegularUser(name, age);
  }
}

const user1 = UserFactory.create("Masum", 25, "admin");
const user2 = UserFactory.create("Ehan", 20);
console.log(user1);
console.log(user2);
