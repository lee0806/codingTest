const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const array = Array(input.length).fill(0);

for (let i = 0; i < input.length; i++) {
    array[i] = Number(input[i]) % 42;
}

const s = new Set(array);

console.log(s.size);

