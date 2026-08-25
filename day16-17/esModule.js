import { count, increment } from "./counter.js";

console.log(
  `Imported count value 0 to ${count} since already update in the counter.js`,
);

increment();

console.log(`After increment again in esModule 3 to ${count}`);
