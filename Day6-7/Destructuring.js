// //shallow copy using ...rest
// //shared the same address ,referenced the orginal
// //If change in orginal object ,copy value will be changed(but top level primitive data will not be changed )

// const RGB = [255, 128, 0];
// const [red, green, blue] = RGB;
// console.log(red);

// const [firstColor, ...remainingColors] = [10, 20, 30, 40];
// console.log(remainingColors);
// const [...colorsSet] = [10, 20, 30, 50, 40];
// console.log("Copy of color set: ", colorsSet);

// const original = [10, 20, 30];

// const shallow = [...original];
// const deep = structuredClone(original);

// // Changing the original top-level value
// original[0] = 99;

// console.log(shallow[0]); //remaining same
// console.log(deep[0]);

// // 1. Original array with a nested object
// const originalArray = ["Main Item", { info: "Original Text" }];
// console.log("Before change Original Array:", originalArray[1].info);
// const shallowCopy = [...originalArray];
// const deepCopy = structuredClone(originalArray);
// originalArray[1].info = "CHANGED BOTH!";

// console.log("After change Original Array:", originalArray[1].info);

// console.log("Shallow Copy:", shallowCopy[1].info); //value will be changed
// console.log("Deep Copy:", deepCopy[1].info); //not changed

// const ob = { name: "masum", roll: 13 };
// console.log(ob);
// const copyOB={...ob}
// console.log(copyOB);
// ob.name="MASUM";
// console.log(copyOB); //not changed
// console.log(ob);//changed

const obj = {
  name: "abc",
  city: "dhaka",
  age: 22,
};
const spread = { ...obj };
console.log(spread);
obj.name = "masum";
console.log(spread); //not changed,name is a primitive data types ,only change if it is a nested object
//example

const user = {
  userName: "xyz",
  location: { dis: "Narsingdi", subDis: "Shibpur" },
};
const copyUser = { ...user };
console.log(copyUser);
user.location.subDis = "Polash";
console.log(copyUser);
user.userName = "sk";
console.log(copyUser);

// const num=2143n;  bigint
// console.log(typeof num);
