const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

let firstNumber = Number(input[0]);
let secondNumber = Number(input[1]);

function sumNumber(a, b) {
    let plus = a + b;
    let minus = a - b;

    return plus * minus;
}

console.log(sumNumber(firstNumber, secondNumber));