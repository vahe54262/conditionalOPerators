let angle1 = 10;
let angle2 = 72;
let triangle = 180;
let angle3;
if (angle1 + angle2 >= triangle) {
  console.log("The sum of the triangle must not be more than 180");
} else {
  angle3 = triangle - angle1 - angle2;
  console.log(angle3);
}
