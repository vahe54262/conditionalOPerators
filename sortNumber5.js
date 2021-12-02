let arr = [5,2,10];
let arr1 = [];

for (let i = 0; i < arr.length; ++i) {
    if (arr[i] <= arr[i + 1]) {
 arr1.unshift(arr[i]);
    }else {
        arr1.push(arr[i]);
    }



}
    
console.log(arr1);