console.log("hello from Script file");
const evnt = document.getElementById("eventHandler");
evnt.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = Date();
});

const btn = document.getElementById("check");
// btn.addEventListener("click", () => console.log("first")); //can handle multiple
btn.addEventListener("click", (event) => console.log("checked"));
// btn.onclick = function () {
//   console.log("First");
// };

// btn.onclick = function () {
//   //only last one will be executive
//   console.log("Second");
// };
const parent = document.getElementById("parentdiv");
parent.addEventListener("click", () => {
  console.log("Parent");
});
const child = document.getElementById("childbtn");
child.addEventListener("click", (event) => {
  console.log("Child");
  event.stopPropagation();
});

const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  //event bubbling
  console.log(event.target.textContent);
});
