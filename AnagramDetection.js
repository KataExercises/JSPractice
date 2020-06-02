// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript


function isAnagram(test, original) {
    let test1 = test.toLowerCase().split('').sort().join('');
    console.log(test1);
    let original1 = original.toLowerCase().split('').sort().join('');
    console.log(original1);

    if (test1 === original1) {
        return true;
    } else {
        return false;
    }

};
