'use strict';
let mul = 1;
let quot = 0;
let rem = 0;
let num = 5678;
let sum = 0;
let count = 0;
if (num !== 0) {
  while (num > 10) {
    count = num % 10;
    num = (num - count) / 10;
    sum += count;
    mul *= count;
    if (num < 10) {
      sum += num;
      mul *= num;
    }
  }
} else {
  console.log("can note");
}

if (mul % sum !== 0) {
  quot = mul % sum;
  console.log(quot);
} else {
  rem = mul / sum;
  console.log(rem);
}
