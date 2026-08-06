//Object.assign(target,source) ,copy or merge the object 
const target = { a: 1 };
let source = { b: 2, c: 3 };

// Merging source into target
Object.assign(target, source); 
console.log(target);
const copy=Object.assign({},source);
console.log(copy);

//Object.freeze(obj) protect global configuration .Only immediate top level freezing .if there is object in object ,i8t can be modified
//"use strict";
const user1={name:"Alex",
    age:20,
}
Object.freeze(user1);
user1.name="masum"; //fail to update
console.log(user1);

//update using assign()
const updateUser=Object.freeze(Object.assign({},user1,{name:"hasan"}));
console.log(updateUser);
const update=Object.freeze({...user1, name:"Masum"});
console.log(update);