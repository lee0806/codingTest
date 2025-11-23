const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("");


for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() >= 91) {
        let str = input[i];
        input[i] = str.toUpperCase();
    } else {
        let str = input[i];
        input[i] = str.toLowerCase();
    }
}

let answer = input.join("");

console.log(answer);