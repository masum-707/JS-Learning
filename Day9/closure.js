// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }
// const counter = outer(); //inner() remember the count value
// counter(); //1
// counter(); //2
// counter(); //3
// counter(); //4
// counter(); //5

function createCounter(initial) {
  if (typeof initial !== "number" || Number.isNaN(initial))
    throw new Error("Initial value must be a number");
  let count = initial;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getValue() {
      return count;
    },
    reset() {
      count = initial;
    },
  };
}
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
const counter1 = createCounter(10);
const counter2 = createCounter(100);

counter1.increment();
counter1.increment();

counter2.increment();
//multiple clouser have separate sate ,if one change no effect in other
console.log(counter1.getValue());
console.log(counter2.getValue());
counter1.reset();
console.log(counter1.getValue());
try {
  const counter3 = createCounter("hello");
} catch (err) {
  console.error("An error occurred: " + err.message);
}

// console.log(counter.getValue());
// counter.count = 100; //not work,count is not a counter property
// console.log(counter.getValue());

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       balance += amount;
//     },

//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//       }
//     },

//     getBalance() {
//       return balance;
//     },
//   };
// }
// const account = createBankAccount(1000);

// account.deposit(500);

// console.log(account.getBalance());
// console.log(account.balance); //undefine ,cause balance is not account property
// console.log(account.hasOwnProperty("balance")); //false
