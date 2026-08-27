// const users = ["Masum", "Rahim", "Masum", "Karim"];

// console.log(users);

// const uniqueUsers = new Set(users);
// console.log(uniqueUsers);

//unique char using set
const char = "hello jAva Script ";
const uniquechar = new Set(char);
console.log(uniquechar);

//add to the set
// uniqueUsers.add("Nayem");
// console.log(uniqueUsers);

uniquechar.add("Java");
console.log(uniquechar);
console.log(uniquechar.entries());
console.log(uniquechar.values());
console.log(uniquechar.keys());
for (const char of uniquechar) {
  console.log(char);
}

const a = 5;
const b = 5;

uniquechar.add(a); //since a=b=5 ,only one 5 will be store
uniquechar.add(b);
console.log(uniquechar);
console.log(uniquechar.keys());

const c = { id: 1 };
const d = { id: 1 };
uniquechar.add(c); //Though c and d hold like same object but there reference are separate and both c and d will be store
uniquechar.add(d);
console.log(uniquechar);

const test = new Set([
  1,
  4,
  null,
  undefined,
  true,
  false,
  "1",
  4,
  undefined,
  null,
]);
console.log(test);
