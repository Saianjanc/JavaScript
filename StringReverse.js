//Program to take input from user and reverse the string and display it. 
const readline = require('readline-sync');

const str = readline.question("Enter a String: ");

const str1 = str.split("")

console.log(str1.reverse().join(""))