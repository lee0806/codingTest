const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

if (input.includes("")) {
    console.log(0);
} else {
    console.log(input.length);
}

