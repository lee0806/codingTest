const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let A = [];
let B = [];

for (let i = 0; i < input.length; i++) {
  let number = input[i].trim().split(" ");

  A.push(Number(number[0]));
  B.push(Number(number[1]));
}

for (let j = 0; j <= A.length - 1; j++) {
  if (A[j] == 0 && B[j] == 0) {
    return 0;
  }
  console.log(A[j] + B[j]);
}
