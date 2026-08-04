const user = { name: "Alice", age: 25, role: "Admin" };

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
