const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

for (let i = 1; i <= input; i++) {
    console.log(i);
}