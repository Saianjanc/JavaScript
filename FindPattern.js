//Program to Search a Pattern in the String
const readline = require('readline-sync');

let str = readline.question("Enter a string: ");

let find = readline.question("Enter a Pattern to Search: ");

let count=0

str=str.split("")

for (let i = 0; i < str.length; i++) {
    if(str[i]+str[i+1]==find){
        count++
    }
}

console.log(count);