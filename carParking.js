function carParking(n, available) {
    let resultArr = [];
    let count = 0;
    let spotNumber = 0;
    for (let r = 0; r < available.length; r++) {
        for (let c = 0; c < available.length; c++) {
            if (available[r][c] === 1) {//r=1,c=0
                count++;
            }
        }
        resultArr.push(count);
        count = 0;
    }
    console.log(resultArr);
    let row = resultArr.indexOf(Math.min(...resultArr));
    console.log(row);

    for (let c = 0; c < available.length; c++) {
        if (available[row][c] === 0) {
            spotNumber = c;
            break;
        }
    }
    return [row + 1, spotNumber + 1];
}


let num = 4;
let carArray =
    [
        [1, 1, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ];

console.log(carParking(num, carArray)); //[2,2]