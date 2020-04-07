// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  //happy coding!
  console.log(A);
  let sortedArr = A.sort((a, b) => a - b);
  console.log(sortedArr);

  //loop and count
  var count = 1; //starts with 1
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      count++;
    } else {
      if (count % 2 !== 0) {
        return sortedArr[i];
      }
      count = 1;
    }
  } //for loop ends, i++
}
