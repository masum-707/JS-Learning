//dot notation can access only standard variable name (fail in , 1,- ETC)
//CAN ACCESV ANY KEY 
const user={
    name:"masum",
    "age":23,
    1:"primary"
};

console.log(user.name);
console.log(user['name']);
console.log(user.age);
console.log(user["age"]);

console.log(user[1]);
// console.log(user.1); //dot notation will be failed 

// const "hi"="hello";  only possible in object key
// console.log(hi);

//it will not follow the attributes sequence 
// sequence for keys... number(in ascending order),string in insertion order 
//best on the keys sequence the values and entity will be print in the array  
console.log(Object.keys(user)); //a array of all user object //all property will be string 
console.log(Object.values(user)); // a array of all values in user object //any 
console.log(Object.entries(user)); // both keys and values 