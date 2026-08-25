async function userData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log("Something wrong:", e);
    return [];
  }
}
const users = await userData();
// console.log(users);
console.log("User Information");
for (const user of users) {
  console.log(`
    Name: ${user?.name}
    Email: ${user?.email}
    City: ${user?.address?.city ?? "Unknown City"}
    Latitude: ${user?.address?.geo?.lat ?? "Unknown"}
    Company: ${user?.company?.name ?? "No Company"}
    `);
}
