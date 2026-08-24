const user = {
  name: "Masum",
  age: 25,
};
console.log(typeof user, user);

const userObjecttoString = JSON.stringify(user); // object to string
console.log(typeof userObjecttoString, userObjecttoString);
const userStringtoObject = JSON.parse(userObjecttoString);
console.log(typeof userStringtoObject, userStringtoObject);
