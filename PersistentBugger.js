// Write a function, persistence, that takes in a positive
// parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits
// in num until you reach a single digit.
// For example:
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//  // 1*2*6 = 12, and finally 1*2 = 2
// persistence(4) === 0 // because 4 is already a one-digit number
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

//Solution:

function reducer(a, b) {
  //console.log(`a = ${a} and b = ${b}`);
  return a * b;
}

function persistence(num) {
  //code me
  let count = 0;
  let initialVal = 1;
  let multiplied = num; //999
  let arr = multiplied.toString().split(""); //[9,9,9]

  for (let i = 0; arr.length >= 1; i++) {
    console.log(arr);
    if (arr.length == 1) {
      break;
    } else {
      count++;
    }
    multiplied = arr.reduce(reducer, initialVal);
    console.log(multiplied); // 729
    arr = multiplied.toString().split("");
  }

  /*
i = 0 , arr = 9,9,9 , 3 >=1 ,
i = 1,  arr = 7,2,9  , 3>=1, 
i = 2,  arr = 1,2,6  , 3>=1, 
i = 3,  arr = 1,2    , 2>=1,
i = 4,  arr = 2      , 1>=1
 */
  return count;
}
