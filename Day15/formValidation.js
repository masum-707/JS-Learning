const form = document.querySelector("#registerForm");

//live validation
// const emailInput = document.getElementById("email");
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// emailInput.addEventListener("input", (e) => {
//   const value = e.target.value;
//   const isValid = emailRegex.test(value);
//   if (!isValid) {
//     console.log("Invalid email format incomplete");
//     return;
//   } else {
//     console.log("Done");
//   }
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  localStorage.setItem("userName", username);

  if (username.trim().length < 5) {
    //can be achieved minlength and maxlength
    console.log("Username must be at least 5 character");
    return;
  }

  const email = document.querySelector("#email").value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(email);
  //   console.log(isValid);
  if (!isValid) return;

  console.log("Form submitted");
});
