fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const [a, b] = input;

console.log(a + b);