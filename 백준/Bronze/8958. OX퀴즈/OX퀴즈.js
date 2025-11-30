const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const testCase = Number(input[0]);

const array = [];

for (let q = 1; q <= testCase; q++) {
  array.push(input[q].trim().split(""));
}

let count = 0;
let sum = 0;

for (let k = 0; k < testCase; k++) {
  for (let i = 0; i < array[k].length; i++) {
    if (i == 0 && array[k][i] == "O") {
      count++;
      sum += count;
      continue;
    }
    if (array[k][i] == "O" && i != array[k].length - 1) {
      count++;
      sum += count;
      continue;
    }
    if (array[k][i] == "O" && i == array[k].length - 1) {
      count++;
      sum += count;
      continue;
    }
    count = 0;
  }
  console.log(sum);
  count = 0;
  sum = 0;
}
