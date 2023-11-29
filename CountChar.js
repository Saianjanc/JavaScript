const readline = require('readline-sync');

const str = readline.question("Enter the first string: ");

var count = 0
str1=str.split(" ").join("")
for (var i=0;i<str1.length;i++){
    count++
}
console.log(count)