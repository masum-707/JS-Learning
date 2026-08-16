// function updateUser(user) {
//   return {
//     ...user,
//     age: user.age + 1,
//   };
// }
// const user = {
//   name: "Masum",
//   age: 23,
// };

// const updated = updateUser(user);

// console.log(user);

// console.log(updated);

// for nested object
const user = {
  name: "Masum",
  address: {
    city: "Dhaka",
  },
};

// const newUser = {
//   ...user,
// };

// newUser.address.city = "Noakhali";
// console.log(user.address.city);//change the original city

// to prevent nested object mutation
//using spreed
const newUser = {
  ...user,
  address: {
    ...user.address,
    city: "Noakhali",
  },
};
newUser.address.city = "Noakhali";
console.log(user.address.city);
console.log(newUser.address.city);
