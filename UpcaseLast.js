//Program to convert the last word of string to Uppercase.

const readline = require('readline-sync');

const str = readline.question("Enter the a Senctence: ");

const str1 = str.split(" ")
console.log(str1[str1.length-1].toUpperCase())
