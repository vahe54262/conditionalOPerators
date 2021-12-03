let num = 736;
let num1;
let sum = 0;
let z = num;

while (num > 0) {
  num1 = num % 10;
  sum = sum * 10 + num1;
  num = parseInt(num / 10);
}
console.log(sum);
let count = num / 10;
sum = Math.trunc(count);

console.log(sum);
