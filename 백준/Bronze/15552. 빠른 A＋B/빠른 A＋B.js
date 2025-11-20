const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const count = input[0];
let A = 0;
let B = 0;
let answer = "";

for (let i = 1; i < input.length; i++) {
  let number = input[i].trim().split(" ");

  A = Number(number[0]);
  B = Number(number[1]);
  answer += A + B + "\n";
}

console.log(answer);
