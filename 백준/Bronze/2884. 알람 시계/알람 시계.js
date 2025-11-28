const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);

let realH = H;
let realM = M - 45;

if (realM < 0) {
  realM = realM + 60;
  if (realH == 0) {
    realH = 24;
  }
  realH = realH - 1;
}

console.log(realH + " " + realM);
