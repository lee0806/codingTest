const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const [a, b] = input;

console.log(a - b);

