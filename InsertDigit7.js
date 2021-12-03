let num = 3545.6449;

while (Math.floor(num) != num) num *= 10;
let dig = !num,
  b = 0;
while (num) {
  (c = 1 << num % 10), (dig & c && (b |= c)) || (dig |= c);
  num = Math.floor(num / 10);
}

for (i = 0; i < 10; i++)
  if (dig & (1 << i) & b)
    console.log("Number " + i + " repeated several times.");
