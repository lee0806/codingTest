const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let numberSet = input[i]
    .trim()
    .split("")
    .map((x) => Number(x));
  let front = [];
  let answerFront = 0;
  let back = [];
  let answerBack = 0;

  if (numberSet.length == 1 && numberSet[0] == 0) {
    break;
  }

  for (let k = 0; k < numberSet.length; k++) {
    front.push(String(numberSet[k]));
  }

  for (let j = numberSet.length - 1; j >= 0; j--) {
    back.push(String(numberSet[j]));
  }
  answerFront = front.join("");
  answerBack = back.join("");

  if (answerFront == answerBack) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
