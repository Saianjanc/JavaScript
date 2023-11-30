//Program to Shift each character by 1 position. 
const readline = require('readline-sync');

const str = readline.question("Enter a String: ");

let str1 = str.split("")

for (let i = 0;i<str1.length;i++) {
    switch (str1[i]){
        case ' ':
            break
        case 'z':
            s[i] = 'a'
        case 'Z':
            s[i] = 'A'
        default:
            str1[i] = String.fromCharCode(str1[i].charCodeAt(0)+1);
    }
}
console.log(str1.join(""))