// Sort array by last character

// Write a function sortMe or sort_me to sort a given array or list by
// last character of elements.
// Element can be an integer or a string.
// Example:
// sortMe(['acvd','bcc']) => ['bcc','acvd']
// The last characters of the strings are d and c. As c comes before d,
// sorting by last character will give ['bcc', 'acvd'].
// If two elements don't differ in the last character,
// then they should be sorted by the order they come in the array.
// https://www.codewars.com/kata/55aea0a123c33fa3400000e7/train/javascript

function sortMe(arr) {
  let original = arr.slice();
  let indx = (a) => original.indexOf(a);
  let last = (a) => `${a}`.slice(-1).charCodeAt();
  return arr.sort((a, b) => last(a) - last(b) || indx(a) - indx(b));
}
