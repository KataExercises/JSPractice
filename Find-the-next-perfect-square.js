// Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// Step 1: Clarify - Understand the question
// the function gets a positive whole humber as a parameter.
// if the parameter is the square of a whole number then return the square of the next number after the square root

// Step 2: Create sample data

// Step 3: Solve Sample Data

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// Step 4: Signature
// function findNextSquare(num -> NUMBER/integer) {
//   return -> NUMBER
// }

// Step 5: List code constructs
// function, Math.sqrt(),let, if, =, ===

// Step 6: Pseudo Code
// our function is going to take a number then we're going to test if that number is  a perfect square if it isn't a integer return -1 if it is a perfect square find its square root, then add one, then square that number, then return it.

// Step 7: Solve

// function findNextSquare(num) {
//   let sqrt_num = Math.sqrt(num)
//   console.log(sqrt_num)
//   if(sqrt_num % 1 === 0) {
//     sqrt_num += 1
//     return sqrt_num * sqrt_num
//   } else return -1
// }

// function findNextSquare(num) {
//   let sqrt_num = Math.sqrt(num)
//   console.log(sqrt_num)
//   if(Number.isInteger(sqrt_num)) {
//     sqrt_num += 1
//     return sqrt_num * sqrt_num
//   } else return -1
// }

// var e = Math.sqrt;

// function findNextSquare(num) {
//   return e(num) % 1 === 0 ? (e(num) + 1) * (e(num) + 1) : -1;
// }

// findNextSquare(121);

function findNextSquare(num) {
  let sqrt_num = Math.sqrt(num)
  //console.log(sqrt_num)
  if (sqrt_num % 1 === 0) {
    sqrt_num += 1
    return sqrt_num * sqrt_num
  } else {
    return -1;
  }
}

findNextSquare(121);