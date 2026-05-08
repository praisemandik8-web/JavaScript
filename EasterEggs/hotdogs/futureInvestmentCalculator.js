

const prompt = require("prompt-sync")();

let investmentAmount = Number(prompt("Enter investment amount: "));
let annualInterestRate = Number(prompt("Enter annual interest rate (%): "));
let numberOfYears = Number(prompt("Enter number of years: "));

let monthlyInterestRate = (annualInterestRate / 100) / 12;

let futureInvestmentValue = investmentAmount * Math.pow(1 + monthlyInterestRate, numberOfYears * 12);

console.log("Future investment value: " + futureInvestmentValue);