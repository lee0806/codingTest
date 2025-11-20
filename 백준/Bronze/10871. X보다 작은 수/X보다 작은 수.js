const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const count = input[0].toString().trim().split(" ");
const array = input[1].toString().trim().split(" ");
let answer = "";

const point = Number(count[1]);
let newArray = array.filter((x) => point > Number(x));

for (let i = 0; i < newArray.length; i++) {
  answer += newArray[i] + " ";
}

console.log(answer);
