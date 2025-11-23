const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let [num, str] = input[i].split(" ");
    let newStr = str.split("").map((x) => x.repeat(Number(num)));
    console.log(newStr.join(""));
}

