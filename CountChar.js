//Program to count the number of characters in the given string without including spaces. 
const readline = require('readline-sync');

const str = readline.question("Enter the first string: ");

const str1=str.split(" ").join("")
console.log(str1.length)