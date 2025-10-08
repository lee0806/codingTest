// 내가 제시한 정답

// let arr = [];

// for (i = 1; i <= 5; i++) {
//   arr.push(i);
// }

// arr.pop();

// console.log(arr);

// GPT 정답

const arr = Array.from({ length: 5 }, (_, i) => i + 1);
arr.pop();
console.log(arr);
