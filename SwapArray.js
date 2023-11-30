//Program to Swap Adjacent Elements in Array
const readline = require('readline-sync');
const len = readline.questionInt("Enter the Number of Elements: ");
let array = new Array()
console.log("Enter Elements of the Array: ")
for (let i = 0; i < len; i++) {
    array[i]=readline.questionInt()
}
console.log("Before Swap "+array)
for (let i=0;i<len;i+=2){
    let temp = array[i]
    array[i]=array[i+1]
    array[i+1]=temp
}
console.log("After Swap "+array)