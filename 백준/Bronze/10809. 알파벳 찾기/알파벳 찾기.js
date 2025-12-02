const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("");

let array = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  let number = input[i].charCodeAt() - 97;

  if (array[number] != -1) {
    continue;
  }
  array[number] = i;
}

const answer = array.join(" ");

console.log(answer);
