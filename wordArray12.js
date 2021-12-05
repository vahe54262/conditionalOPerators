let arr = [1, "hi", 2, 7,"hello",null]; 
let num = [];
let str = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i] === Number(arr[i])){
        num.push(arr[i]);
    }
    else  if(arr[i] === String(arr[i])){
        str.push(arr[i])
    }
    else {
        console.log("any types");
    }
}
console.log(`"Numbers: ${num.length}, Strings: ${str.length}"`);