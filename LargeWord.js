//Program to find the Largest and Smallest Charcater in String
const readline = require('readline-sync');

let str = readline.question("Enter a string: ");

str=str.split(" ")
let small=str[0].length
let large=str[0].length
let wlarge,wsmall
for (let i = 0; i <str.length; i++) {
    if (str[i].length>large){
        large=str[i].length
        wlarge=str[i]
    }
    if (str[i].length<small){
        small=str[i].length
        wsmall=str[i]
    }
}
console.log("The Largest Word = "+wlarge);
console.log("The Smallest Word = "+wsmall);