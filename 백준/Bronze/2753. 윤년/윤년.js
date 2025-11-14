const fs = require('fs');
const file = fs.readFileSync(0, "utf-8").trim();

const input = Number(file);


if (input % 4 == 0 && (input % 100 != 0 || input % 400 == 0)) {
    console.log(1);
} else {
    console.log(0);
}