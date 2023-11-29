//Program to take input from user, find and remove duplicate words. 
const readline = require('readline-sync');

const str = readline.question("Enter a String: ");

const str1 = str.split(" ")

const res = new Array

for (var i=0;i<str1.length;i++){
    for (var j=i+1;j<str1.length;j++){
        if (str1[i]==str1[j]) {
            res[i]=str1[i]
        }
        else{
            res[i]=str1[i]
        }
    }
}

console.log(res.join(" "))