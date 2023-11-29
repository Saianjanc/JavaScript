//Program to Sort the Elements of Array
const readline = require('readline-sync');
const len = readline.questionInt("Enter the Number of Elements: ");
const array = new Array()
for (var i = 0; i < len; i++) {
    array[i]=readline.questionInt("Enter Elements of the Array: ")
}
console.log(array)
for (var i=0;i<len;i++){
    for (var j=i+1;j<len;j++){
        if(array[i]>array[j]){
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log("Sorted Array: "+array)