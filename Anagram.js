//Program to Check Strings are Anagram. 
const readline = require('readline-sync');

const str1 = readline.question("Enter the first string: ");
const str2 = readline.question("Enter the second string: ");
if (str1.length!=str2.length) {
    console.log("Invaild Input The Strings are not Anagram!")
} else {
    if (str1.split("").sort().join("")==str2.split("").sort().join("")) {
        console.log("True Strings are Anagram!")
    } else {
        console.log("False Strings are not Anagram!")
    }
}