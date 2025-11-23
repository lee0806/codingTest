const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

let sum = 0;

for (let i = 0; i < input.length; i++) {
    input[i] = input[i] * input[i];
}

for (let j = 0; j < input.length; j++) {
    sum += input[j];
}

console.log(sum % 10);