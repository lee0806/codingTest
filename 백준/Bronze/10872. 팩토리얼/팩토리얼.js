const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf-8').trim());

let answer = 1;

if (input == 0) {
    console.log(1);
    
} else {
    for (let i = input; i > 0; i--) {
        answer *= i;
    }
    console.log(answer);
}