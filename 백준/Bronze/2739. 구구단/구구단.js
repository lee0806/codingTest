const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const number = Number(input);

for (let j = 1; j <= 9; j++) {
  console.log(number + " " + "*" + " " + j + " " + "=" + " " + number * j);
}
