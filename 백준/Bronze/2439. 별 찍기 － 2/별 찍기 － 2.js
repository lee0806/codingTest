const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
let count = input;
let star = 1;

for (let i = 0; i < input; i++) {

    console.log(" ".repeat(count-1) + "*".repeat(star));
    star++;
    count--;
}