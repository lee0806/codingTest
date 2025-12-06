const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let carry = new Set(input);

let carry2 = Array.from(carry);

carry2.shift();

carry2.sort((a, b) => {
  if (a.length == b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

carry2.forEach((x) => {
  console.log(x);
});
