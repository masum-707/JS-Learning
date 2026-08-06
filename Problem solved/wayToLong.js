// Let's consider a word too long, if its length is strictly more than 10 characters. All too long words should be replaced with a special abbreviation.Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".
// additional ,also print the slice of that

function wayLong(string, a) {
  console.log("Yes ,Length greater then 10.");
  console.log("special abbreviation:", string[0] + (a - 2) + string[a - 1]);
  console.log("Slice:", string.slice(1, -1));
}

function isLong(string) {
  //     if (string.length>10){
  //         console.log("Yes ,Length greater then 10.");
  //         wayLong(string , string.length);
  // }else{
  //     console.log("NO,Less then or equal 10:",string);
  // }
  string.length > 10
    ? wayLong(string, string.length)
    : console.log("NO,Less then or equal 10:", string);
}

const word = "pneumonoultramicroscopicsilicovolcanoconiosis";
console.log("Word: ", word);
isLong(word);
