export default function add(a, b) {
  //a file can have only one default export
  return a + b;
}
console.log("This from add.js", add(45, 45));
