'use strict';
let arr = ["anymore", "raven", "me", "communicate"];
let sum;
let max ;
let min ;
let count = 0;
for (let i = 0; i < arr.length; ++i) {

    if (arr[i].length > count) {
         count = arr[i].length;
        max = arr[i];
    }

    else if(arr[i].length < count) {
        count = arr[i].length;
        min = arr[i];
    }

sum = min + max;
}
console.log(`min  ${min.length} + max  ${max.length} = sum ${sum.length}`);
