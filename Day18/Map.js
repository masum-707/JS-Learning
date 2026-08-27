// Map is a data structure store data in key value pair.Use set(key,value) to store and grt(key) to get data

// const scores = new Map();
// // key can be any type
// scores.set("Masum", 95);
// scores.set("Rahim", 88);
// scores.set("Karim", 91);

// const findTheScoreOfkarim = scores.get("Karim");
// console.log(`The score of karim is ${findTheScoreOfkarim}`);
// scores.set("Karim", 100);
// console.log(scores.get("Karim"));
//object as a key...

let user1 = { id: 1, name: "Masum" };
let user2 = { id: 2, name: "Rahim" };
const user3 = { id: 3, name: "Karim" };
// console.log(Object.keys(user1));

const userStatus = new Map();
userStatus.set(user1, "online");
userStatus.set(user2, "offline");
userStatus.set(user3, "online");

console.log(userStatus.get(user1));
// user1.id = 11; //not effect if property value changed
user1 = null; //reassign causes undefined
// userStatus.set(null, 99999);
// userStatus.set(undefined, 77777);
console.log(userStatus.get(user1)); //undefined or null object can accept but reassign give undefined
// console.log(userStatus.get(user2));
// console.log(userStatus.get(null));

//If key does not exit it will give undefined
// console.log(userStatus.get("NothingIsnotDefined"));

// console.log(userStatus.get(user1));
// function ert() {}
// //to check a key exist .has(key)
// //for function ,class ,object if not exist will throw reference error
// console.log(userStatus.has(ert()));
// //to know the number of entries .size  not length
// console.log(userStatus.size);
// console.log(typeof userStatus);

//Map is iterable ....to access key value for(const [key,value] of Map)

// for (const [key, value] of userStatus) {
//   console.log(key, value);
// }
// //to access only key  .keys()
// for (const key of userStatus.keys()) {
//   console.log(key);
// }

// //to access only value  .values()
// for (const value of userStatus.values()) {
//   console.log(value);
// }
// console.log(userStatus.values());
// console.log(userStatus.keys());
//to check key and value   .entries()

// for (const entry of userStatus.entries()) {
//   console.log(entry);
// }
// console.log(userStatus.entries());

// const obj = {};

// obj[1] = "one";
// obj[true] = "yes";
// console.log(obj);

// const map = new Map();

// map.set(1, "one");
// map.set(true, "yes");
// console.log(map);
// const userArray = [...userStatus];
// console.log(userArray);

// const map = new Map();

// let user = { name: "Masum" };

// map.set(user, "User data");

// console.log(map.get(user)); // "User data"

// user = { name: "Rahim" };

// console.log(map.get(user)); // undefined
