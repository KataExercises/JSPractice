// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(input) {
    // your code
    let output = [];
    let lowerCaseInput = input.toLowerCase();//abc

    for (let i = 0; i < lowerCaseInput.length; i++) {
        //Step1. first we push UC
        output.push(lowerCaseInput[i].toUpperCase());

        //Step2. We push the LC with loop, j is the number of times we will push lower case letter for each input letter  
        for (let j = 0; j < i; j++) {
            output.push(lowerCaseInput[i]);
        }

        //Step3. We push '-'
        if (i !== lowerCaseInput.length - 1) {
            output.push("-");
        }
        console.log(output.join(''));

    }

    return output.join('');