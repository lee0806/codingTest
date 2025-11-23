const fs = require('fs');
const [input, n] = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let word = input.split("");

console.log(word[Number(n)-1]);
