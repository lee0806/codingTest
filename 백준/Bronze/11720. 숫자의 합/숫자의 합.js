const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let numLength = Number(input[0]);

let arrayInput = input[1].split("").map(Number);

let sum = 0;

arrayInput.forEach((x) => {
    sum += x;
})

console.log(sum);

