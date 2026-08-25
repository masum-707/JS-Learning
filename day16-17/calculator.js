//default exported function name can be changed during import (eg..add become sum)

import sum from "./add.js"; //imported file will be run top to bottom first

import { multiply as multiplier } from "./multiplication.js"; //rename with out default exported

console.log("After finished imported execution"); //execute after finished the execution of all imported file

console.log("Sum of 20 and 30 :", sum(20, 30));
console.log("Multiplication of 20 and 30 :", multiplier(20, 30));
