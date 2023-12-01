//Program to Search a Word in String
const readline = require('readline-sync');

let str = readline.question("Enter a string: ");

let find = readline.question("Enter a Word to Search: ");
let flag=false
str=str.split(" ")

for (let i = 0; i < str.length; i++) {
    if (str[i]==find) {
        console.log(find+" word is Found in the String!")
        flag=true
    }
}
if (!flag) {
    console.log(find+" word is not Found in the String!");
}