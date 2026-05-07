const prompt = require("prompt-sync")();

let name = prompt("Enter Name ")
let age = +prompt("Enter age ")

console.log("I am", name, "and I am ", age, " years old. ")
