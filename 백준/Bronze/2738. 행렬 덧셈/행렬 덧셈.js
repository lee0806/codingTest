const fs = require('fs');
const input =  fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let ArrayLength = input[0].split(" ");

let Y = Number(ArrayLength[0]);
let X = Number(ArrayLength[1]);


let answer = Array.from({ length : Y }, () => Array(X));


let firstArray = [];
let secondArray = [];

for (let i = 1; i <= Y; i++) {
    let num = input[i].split(" ");
    firstArray.push(num);
}

for (let j = Y+1; j <= Y+Y; j++) {
    let num = input[j].split(" ");
    secondArray.push(num);
}

let newFirstArray = firstArray.map((x) => x.map(Number));
let newSecondArray = secondArray.map((x) => x.map(Number));

for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
        answer[i][j] = newFirstArray[i][j] + newSecondArray[i][j];
    }
}

for (let i = 0; i < Y; i++) {
    console.log(answer[i].join(" "));
}
