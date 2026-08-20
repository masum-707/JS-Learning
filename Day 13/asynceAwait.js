// async function test() {
//   //async function always return a promise
//   return "Hello";
// }
// //console.log(test());
// // test().then((value) => {
// //   console.log(value);
// // });
// const value = await test(); //await return a value from a promise
// console.log(value);

// function getNumber() {
//   return Promise.resolve(100);
// }

// async function main() {
//   const result = await getNumber();

//   console.log(result);
//   return result;
// }

// main();
// console.log(main());

// async function test() {
//   const data = await getData();

//   console.log(data);
// }

// function getData() {
//   return Promise.reject("Something went wrong");
// }

// test(); //error since promise reject
// //solution,test() using try catch
// async function test() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// }

//try can have multiple await ,if one reject it directly jumps to the catch..eg
async function getUserData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(user.id);

    console.log(user);
    console.log(posts);
    console.log(comments);
  } catch (error) {
    console.log("Something failed:", error);
  }
}
