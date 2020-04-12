// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting
// how many glasses of water you should drink to not be hungover.
// Example parties:
// Input 0:
// "1 beer"
// Output 0:
// "1 glass of water"
// Explaination 0:
// You drank one standard drink
// Input 1:
// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"
// Output 1:
// "10 glasses of water"
// Explaination 1:
// You drank ten standard drinks
// Note:
// To keep the things simple, we'll considere that any "numbered thing" in the string is a drink.
// Even "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"...
//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

function hydrate(s) {
  // your code here
  let sum = 0;
  let split = s.split(" ");
  console.log(split);
  for (let i = 0; i < split.length; i++) {
    let int = parseInt(split[i], 10);
    console.log(`i : ${i}, split[i]: '${split[i]}', int: ${int}`);
    if (!isNaN(int)) {
      //is int is a number or not
      sum += int; // sum = sum+int
    }
  }
  return sum <= 1 ? sum + " glass of water" : sum + " glasses of water";
}
