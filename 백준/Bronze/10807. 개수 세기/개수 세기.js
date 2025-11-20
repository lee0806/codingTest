const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const array = input[1].toString().trim().split(" ");
const count = input[2].toString().trim().split(" ");
let answer = 0;

const newArray = array.map((x) => Number(x) == count);

for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] == true) {
    answer += 1;
  }
}

console.log(answer);
