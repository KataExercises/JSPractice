//1. check  two numbers and return the trueif one number is 100 ir if the sum of num is 100;
function checkNumbers(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
}
//console.log(checkNumbers(50, 50));

//2. To get the extention on filename.
const getFileName = str => str.slice(str.lastIndexOf("."));
console.log(getFileName("index.html"));

//3. Replace every character in a string with the caracter following in the alphabet.
//String.fromCharCode
//charCodeAt //returns numerical value
const replaceChar = str =>
  str
    .split("") //returns every character in a string as an array
    .map(char => String.fromCharCode(char, charCodeAt(0) + 1)) //.map()changing arr
    .join(""); //joins together as a string
console.log(replaceChar("z"));

//4. Get the current date, expected output mm-dd-yyyy
const todaysDate = (date = new Date()) => {
  //date is an object
  var days = date.getDate() + 1; //add +1 because it will start with 0
  var month = date.getMonth() + 1;
  var years = date.getFullYear();
  return `${days}/${month}/${years}`;
};
console.log(todaysDate());

//5. Create a new string adding "New!" in front of given string.
//   If the given string begins with "New!" alredy then return the original string.
const addNew = str => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
console.log(addNew("New! Lalla"));
