const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(" ").map(Number);

const answer = Math.abs(input[0]-input[1]);

console.log(answer);