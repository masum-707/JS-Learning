//show the list of user who are greater 20 years
//format (name1:age1) | (name2:age2)
const user = [
  { name: "A", age: 24 },
  { name: "B", age: 14 },
  { name: "C", age: 29 },
  { name: "D", age: 20 },
  { name: "E", age: 27 },
  { name: "F", age: 15 },
  { name: "G", age: 14 },
  { name: "H", age: 22 },
  { name: "I", age: 17 },
  { name: "J", age: 37 },
];

const olderThenTweenty = user
  .filter((user) => user.age > 20)
  .map((user) => `(${user.name}:${user.age})`)
  .join(" | ");
console.log(olderThenTweenty);
