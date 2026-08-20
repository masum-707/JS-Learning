async function getUsers() {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/100000"),
      fetch("https://jsonplaceholder.typicode.com/comments/1888"),
    ]);
    // console.log("User inside log", users.status);
    // console.log(`Check user status :${users.status}`);
    const responses = [
      { name: "Users", response: users },
      { name: "Posts", response: posts },
      { name: "Comments", response: comments },
    ];

    const errors = responses.filter((item) => !item.response.ok);
    if (errors.length > 0) {
      throw new Error(
        `HTTP error!${errors[0].name} status:${errors[0].response.status}`,
      );
    }
    // console.log("errors", errors);
    // if (!users.ok) {
    //   throw new Error(`HTTP error!Users status:${users.status}`);
    // }
    // if (!posts.ok) {
    //   throw new Error(`HTTP error!Posts status:${posts.status}`);
    // }
    // if (!comments.ok) {
    //   throw new Error(`HTTP error!Comments status:${comments.status}`);
    // }
    return await Promise.all([users.json(), posts.json(), comments.json()]);
    // const users = await responseA.json();
    // const posts = await responseB.json();
    // const comments = await responseC.json();
    // return [users, posts, comments];
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch user data");
  }
}

async function test() {
  try {
    const result = await getUsers();
    console.log("Users:", result[0]);
    console.log("Posts:", result[1]);
    console.log("Comments:", result[2]);
  } catch (err) {
    console.log("Reject:", err.message);
  }
}

console.log("Data fetch checking ....");
test();
