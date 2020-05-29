//1. How to add data  to the beginnig of an arr and to the end
// a. .push() & .unshift()
myArr = ['a', 'b', 'c', 'd'];
myArr.push('nata'); //adds to the end
myArr.unshift('kazi');//adds to the beginning
console.log(myArr);
//[ 'kazi', 'a', 'b', 'c', 'd', 'nata' ]

// b. [... ]
let newArr = [...myArr, 'end'];
let newArr = ['start', ...myArr, 'end'];
//[ 'start', 'a', 'b', 'c', 'd', 'end' ]

//2. Create a private variable
function privateVar() {
    let secretVar = 'this is secret variable';
    return function () {
        return secretVar;
    }
}

let getsecretVar = privateVar();
//console.log(privateVar());
console.log(getsecretVar());

//3. What is output? (closures)
var num = 4;
function outer() {
    let num = 2;
    function inner() {
        num++;
        let num = 3;
        console.log(num);
    }
    inner();
}
outer();

//4. What is output?
console.log(typeof 1);
//number

//5. 



