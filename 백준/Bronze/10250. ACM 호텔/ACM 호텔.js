const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let hotel = input[i].trim().split(" ");
  let H = Number(hotel[0]);
  let W = Number(hotel[1]);
  let count = Number(hotel[2]);

  let floor = ((count - 1) % H) + 1;
  let room = Math.floor((count - 1) / H + 1);

  console.log(floor * 100 + room);
}
