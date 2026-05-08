

const prompt = require("prompt-sync")();

let balance = Number(prompt("Enter account balance: "));
let annualInterestRate = Number(prompt("Enter annual interest rate (%): "));

let interest = balance * (annualInterestRate / 1200);

console.log("Monthly interest: " + interest);