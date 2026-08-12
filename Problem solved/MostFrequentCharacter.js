function mostFrequentChar(str) {
  const char = str.split("");
  let arrChar = [];
  let arrCount = [];
  for (let i = 0; i < char.length; i++) {
    if (!arrChar.includes(char[i]) && char[i] != " ") {
      arrChar.push(char[i]);

      let count = 0;
      for (let ch of char) {
        if (char[i] == ch) count++;
      }
      arrCount.push(count);
    }
  }

  return arrChar[arrCount.indexOf(Math.max(...arrCount))];
}
const str = "mississippi";
console.log(mostFrequentChar(str));
