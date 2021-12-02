let num = 527;
let counter = 527 / 10;
let count = num % 10;
let sum = Math.trunc(count);
let sum2 = Math.trunc(counter);
let str = sum.toString();
let str2 = sum2.toString();
let conc = str + str2;

console.log(Number(conc));
