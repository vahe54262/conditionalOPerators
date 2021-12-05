let arr = [null, null, 1, undefined, 5, 9, false];
let arr1 = [];
for (let i = 0; i < arr.length; ++i) {
  if (
    arr[i] !== " " &&
    arr[i] !== undefined &&
    arr[i] !== null &&
    arr[i] !== false &&
    arr[i] !== true &&
    arr[i] !== 0 &&
    !isNaN(arr[i])
  ) {
    arr1.push(arr[i]);
    console.log(arr1);
  }
}
