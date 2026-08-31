const text = "Order # 9823 is processing.";

console.log(text.match(/\d+/g)); // Output: [ '9823' ]
console.log(text.match(/\D+/g)); // Output: [ 'Order #', ' is processing.' ]

const text2 = "User_1! Code: A23";

console.log(text2.match(/\w+/g)); // Output: [ 'User_1', 'Code', 'A23' ]
console.log(text2.match(/\W+/g)); // Output: [ '! ', ': ' ]

const text3 = "Line1\nLine2\tTabbed";

console.log(text3.match(/\s/g)); // Output: [ '\n', '\t' ]
console.log(text3.match(/\S+/g)); // Output: [ 'Line1', 'Line2', 'Tabbed' ]

const text4 = "cat cot c-t c5t";

console.log(text4.match(/c.t/g)); // Output: [ 'cat', 'cot', 'c-t', 'c5t' ]

const text5 = "apple";

console.log(text5.match(/[aeiou]/g)); // Output: [ 'a', 'p', 'p', 'l', 'e' ] -> wait, p and l are not vowels. Correct array: [ 'a', 'e' ]
console.log(text5.match(/[^aeiou]/g)); // Output: [ 'p', 'p', 'l' ]

const text6 = "IDs: A1, B9, C5, Z0";

console.log(text6.match(/[A-C][1-5]/g)); // Output: [ 'A1', 'C5' ]

const text7 = "hi hii hiii h";

console.log(text7.match(/hi*/g)); // Output: [ 'hi', 'hii', 'hiii', 'h' ]
console.log(text7.match(/hi+/g)); // Output: [ 'hi', 'hii', 'hiii' ]

const text8 = "color or colour";

console.log(text8.match(/colou?r/g)); // Output: [ 'color', 'colour' ]

const text9 = "1 12 123 1234 12345";

console.log(text9.match(/\d{3}/g)); // Output: [ '123', '123', '123' ] (matches blocks of 3 digits)
console.log(text9.match(/\d{3,}/g)); // Output: [ '123', '1234', '12345' ] (3 or more digits)
console.log(text9.match(/\d{2,4}/g)); // Output: [ '12', '123', '1234', '1234' ] (2 to 4 digits)

const text10 = "1 12 123 1234 12345";

console.log(text10.match(/\d{3}/g)); // Output: [ '123', '123', '123' ] (matches blocks of 3 digits)
console.log(text10.match(/\d{3,}/g)); // Output: [ '123', '1234', '12345' ] (3 or more digits)
console.log(text10.match(/\d{2,4}/g)); // Output: [ '12', '123', '1234', '1234' ] (2 to 4 digits)

const target1 = "SUCCESS: Process finished";
const target2 = "Finished with SUCCESS";

console.log(/^SUCCESS/.test(target1)); // Output: true
console.log(/^SUCCESS/.test(target2)); // Output: false

console.log(/SUCCESS$/.test(target1)); // Output: false
console.log(/SUCCESS$/.test(target2)); // Output: true

const texts = "The cat is in the cattle market.";

console.log(texts.match(/cat/g)); // Output: [ 'cat', 'cat' ] (matches both words)
console.log(texts.match(/\bcat\b/g)); // Output: [ 'cat' ] (only matches the standalone animal)
