const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const countArray = Array(31).fill(false);

for (let i = 0; i < input.length; i++) {
  countArray[input[i]] = true;
}

for (let j = 0; j < countArray.length; j++) {
  if (countArray[j] == false && j != 0) {
    console.log(j);
  }
}
