const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [H, W] = input[0].split(" ").map((x) => Number(x));

const array = Array.from({ length: 8 }, () => Array(8).fill(""));
const array2 = Array.from({ length: 8 }, () => Array(8).fill(""));
const chess = [];
let count = 0;
let topCount = 0;
let topCount2 = 0;
let answer = 2147383645;

// 원본 체스판
for (let k = 1; k < input.length; k++) {
  chess.push(input[k].split(""));
}

// B로 시작하는 8x8 체스판
for (let j = 0; j < 8; j++) {
  count = 0;
  if (j != 0 && j % 2 != 0) {
    count = 1;
  }
  for (let k = 0; k < 8; k++) {
    if (count == 0) {
      array[j][k] = "B";
      count = 1;
    } else {
      array[j][k] = "W";
      count = 0;
    }
  }
}

// W로 시작하는 8x8 체스판
for (let j = 0; j < 8; j++) {
  count = 0;
  if (j != 0 && j % 2 != 0) {
    count = 1;
  }
  for (let k = 0; k < 8; k++) {
    if (count == 0) {
      array2[j][k] = "W";
      count = 1;
    } else {
      array2[j][k] = "B";
      count = 0;
    }
  }
}

// 8x8 비교
for (let height = 0; height <= H - 8; height++) {
  for (let weight = 0; weight <= W - 8; weight++) {
    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b++) {
        if (chess[height + a][weight + b] != array[a][b]) {
          topCount++;
        }

        if (chess[height + a][weight + b] != array2[a][b]) {
          topCount2++;
        }
      }
    }
    if (answer > topCount) {
      answer = topCount;
    }
    if (answer > topCount2) {
      answer = topCount2;
    }
    topCount = 0;
    topCount2 = 0;
  }
}

console.log(answer);
