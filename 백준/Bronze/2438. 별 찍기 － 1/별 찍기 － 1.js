const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const number = Number(input);

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
