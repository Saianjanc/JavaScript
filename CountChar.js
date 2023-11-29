const readline = require('readline-sync');

const str = readline.question("Enter the first string: ");

var count = 0
const str1=str.split(" ").join("")
count = str1.length()
console.log(count)