const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let ABC = A * B * C;

let array = ABC.toString().trim().split("");

let countArray = Array(10).fill(0);

for (let i = 0; i < array.length; i++) {
  countArray[Number(array[i])] += 1;
}

for (let k of countArray) {
  console.log(k);
}
