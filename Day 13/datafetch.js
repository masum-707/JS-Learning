// async function getUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   console.log(response);

//   const data = await response.json();

//   return data;
// }
// async function main() {
//   try {
//     const user = await getUser();

//     console.log(user);
//   } catch (error) {
//     console.log("Something went wrong:", error);
//   }
// }

// main();

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, ms);
  });
}

try {
  const result = await Promise.race([
    fetch("https://jsonplaceholder.typicode.com/users"),
    timeout(10),
  ]);

  console.log(result);
} catch (error) {
  console.log(error.message);
}
