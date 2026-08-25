const user = {
  name: "Masum",
  greet: "hello",
  address: {
    city: "Dhaka",
  },
};

// console.log(user.address?.district?.city);

// Optional chaining protects against nullish values, not incorrect types.it check on null and undefined
// console.log(user.greet?.()); //error

//(??) nullish give alternative value if the the value is null or undefined
console.log(user?.address?.subDistrict ?? "Unknown"); //since there is no subDistrict in address(undefined) it will return Unknown
