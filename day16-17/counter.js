export let count = 0;

export function increment() {
  count++;
}
increment();
console.log(count);
increment();
increment();
console.log(`Count update 0 to ${count} in counter.js`);
