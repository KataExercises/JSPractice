function ChangeMaker(price, payment) {
    const coinArr = [1, 5, 10, 25];
    let resultArr = [];
    //Sum of payment Array
    let payment1 = payment.reduce(function (a, b) {
        return a + b;
    });
    console.log(payment1);

    // Change
    let change = Math.round((payment1 - price) * 100);

    console.log(change);

    //Check if balance is enough
    if (payment1 < price) {
        change = payment1 * 100;
    }

    //Return Final Result


    for (let i = coinArr.length - 1; i >= 0; i--) {
        if (Math.floor(change / coinArr[i]) !== 0) {
            resultArr[i] = Math.floor(change / coinArr[i]);
            console.log('first push: ' + resultArr[i]);
            change = change % coinArr[i];
        }
        else {
            resultArr[i] = 0;
        }
    }
    return resultArr;
}


let itemPrice = 1.50;
let moneybyCustomer = [1];

console.log(ChangeMaker(itemPrice, moneybyCustomer));