const weakMap = new WeakMap();

user1 = { name: "Masum1" }; //undefined
user2 = { name: "Masum2" };
user3 = { name: "Masum3" }; //null
user4 = { name: "Masum4" };
user5 = { name: "Masum5" };
// user3 = null;//TypeError,if the first time remain null or undefined ,weakmap doesn't accept mull or undefined  as a key
weakMap.set(user1, 1);
weakMap.set(user2, 2);
weakMap.set(user3, 3);
weakMap.set(user4, 4);
weakMap.set(user5, 5);
console.log(weakMap.get(user3));
// user3.name = null ;//not effect value change
user3 = { age: 40 }; //reassign gives undefined
console.log(weakMap.get(user3));
