function longestWord(str) {
  const words = str.split(/\s+/); //handle multiple space
  let longWord = "";
  let long = 0;
  for (const word of words) {
    //if (word.length > longWord.length)  without long
    if (word.length > long) {
      longWord = word;
      long = word.length;
    }
  }
  return longWord;
}

const str = "I   love    JavaScript";
console.log(longestWord(str));
