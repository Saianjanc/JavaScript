//Program to Find the Minimum and Maximum Element in Array
const readline = require('readline-sync');
const len = readline.questionInt("Enter the Number of Elements: ");
let array = new Array()
console.log("Enter Elements of the Array: ")
for (let i = 0; i < len; i++) {
    array[i]=readline.questionInt()
}
const ch = readline.questionInt("Enter 1:To Find Maximum or 2:To Find Minimum ");
switch (ch) {
    case 1:
        let max=array[0]
        for (let i = 0; i < len; i++){
            if(array[i]>max){
                max=array[i]
            }
        }
        console.log(array)
        console.log("The Maximum Element is "+max)
        break;
    case 2:
        let min=array[0]
        for (let i = 0; i < len; i++){
            if(array[i]<min){
                min=array[i]
            }
        }
        console.log(array)
        console.log("The Minimum Element is "+min)
        break;
    default:
        console.log("Invaild Input!")
        break;
}