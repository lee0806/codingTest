const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let numInput = input.map(Number);
let bigInput = input.map(Number);

numInput.sort((a, b) => a - b);

console.log(numInput[numInput.length-1]);

let big = numInput[numInput.length-1];

for (let i = 0; i < input.length; i++) {
    if (bigInput[i] == big) {
        console.log(i+1);
    }
}