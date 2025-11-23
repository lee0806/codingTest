const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let arrayLength = Number(input[0]);

let newArray = input[1].split(" ").map(Number).sort((a, b) => a - b);

console.log(newArray[0] + " " + newArray[arrayLength-1]);