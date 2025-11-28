const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

const array = input.map((x) => Number(x));
let count = 0;

if (array[0] == 1) {
  for (let i = 1; i <= 8; i++) {
    if (array[i - 1] != i) {
      return console.log("mixed");
    }
  }
  return console.log("ascending");
}

if (array[0] == 8) {
  for (let k = 8; k >= 1; k--) {
    if (array[count] != k) {
      return console.log("mixed");
    }
    count++;
  }
  return console.log("descending");
}

console.log("mixed");
