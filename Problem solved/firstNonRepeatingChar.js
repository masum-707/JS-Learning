// function firstNonRepeatChar(str){
// for(let i=0;i<str.length-1;i++){
//     for(let j=i+1;j<str.length,j++){
//         if(str[i]===str[j])break;
//         if(j===str.length-1) return str[i];
//     }
// }
// }

//using indexOf() and optimize

function firstNonRepeatChar(string) {
  if (string.trim().length < 1)
    return "there is no character in the given string";
  const str = string.toLowerCase();
  for (char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return "Every character repeats.";
}

console.log(firstNonRepeatChar("  "));
