//Program to Combine Two Arrays into One Array
const readline = require('readline-sync');
const len1 = readline.questionInt("Enter the Number of Elements of 1st Array: ");
let arr1 = new Array()
let res = new Array
console.log("Enter Elements of 1st Array: ")
for (let i = 0; i < len1; i++) {
    arr1[i]=readline.questionInt()
}
arr1=arr1.sort()
for (let i = 0; i < len1; i++) {
    res.push(arr1[i])
}
const len2 = readline.questionInt("Enter the Number of Elements of 2nd Array: ");
let arr2 = new Array()
console.log("Enter Elements of 2nd Array: ")
for (let i = 0; i < len2; i++) {
    arr2[i]=readline.questionInt()
}
arr2=arr2.sort()
for (let i=0;i<len2;i++){
    for (let j=0;j<len1;j++){
        if (arr1[j]==arr2[i]) {
            res.pop()
        }
    }
    res.push(arr2[i])
}
console.log(res)