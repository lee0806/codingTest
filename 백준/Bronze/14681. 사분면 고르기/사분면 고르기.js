const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/);

const X = Number(input[0]);
const Y = Number(input[1]);

if (X > 0 && Y > 0) console.log(1);
else if (X < 0 && Y > 0) console.log(2);
else if (X < 0 && Y < 0) console.log(3);
else if (X > 0 && Y < 0) console.log(4);