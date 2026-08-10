function firstRepeatChar(str) {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return -1;
}

const string = "ab cde fesdf";
console.log(firstRepeatChar(string)); //space
string.indexOf();
