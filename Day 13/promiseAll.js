async function test() {
  let data;

  try {
    data = await Promise.all([
      Promise.resolve("A"),
      Promise.resolve("B"),
      Promise.resolve("C"),
    ]);
  } catch (err) {
    console.log(err);
  }
  return data;
}
const results = await test();
console.log(results);
