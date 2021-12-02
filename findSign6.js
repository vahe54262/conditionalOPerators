let num = 7,
  num1 = 4,
  num2 = -8;

if (num > 0 && num1 > 0 && num2 > 0) {
  console.log("The sign is +");
} else if (num < 0 && num1 < 0 && num2 < 0) {
  console.log("The sign is -");
} else if (num > 0 && num1 < 0 && num2 < 0) {
  console.log("The sign is +");
} else if (num < 0 && num1 > 0 && num2 < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
