// 1. Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  var count = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      count += i;
    }
  }
  return count;
}

//2. Find min and max
//Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
}

// 3. You're a square!

// You like building blocks. You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead,
// you end up with an ordinary rectangle! Those blasted things!
// If you just had a way to know, whether you're currently working in vain… Wait!
// That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false

var isSquare = function (n) {
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 === 0) return true;
  else return false;
};
