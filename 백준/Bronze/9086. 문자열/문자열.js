const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let count = Number(input[0]);

for (let i = 0; i < count; i++) {
    console.log(input[i+1].charAt(0) + input[i+1].charAt(input[i+1].length - 1));
}