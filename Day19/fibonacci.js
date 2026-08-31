class CustomValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "CustomValidation";
    this.field = field;
  }
}

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    if (a >= 50) {
      throw new CustomValidationError(
        "fibonacci series exceed 50",
        "Limit Exceed",
      );
    }
    yield a;
    [a, b] = [b, a + b];
  }
}
const fb = fibonacci();
try {
  console.log(fb.next().value); // 0  if fb.next() , {value:0,done:false}
  console.log(fb.next().value); // 1
  console.log(fb.next().value); // 1
  console.log(fb.next().value); // 2
  console.log(fb.next().value); // 3
  console.log(fb.next().value); // 5
  console.log(fb.next().value); // 8
  console.log(fb.next().value); // 13
  console.log(fb.next().value); //21
  console.log(fb.next().value); //34
  console.log(fb.next().value); //throw the custom error
  console.log(fb.next().value);
} catch (error) {
  console.log(error.name);
  console.log(error.field);
  console.log(error.message);
}
