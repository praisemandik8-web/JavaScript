
const prompt = require("prompt-sync")();

let monthlySaving = Number(prompt("Enter monthly saving amount: "));

let monthlyInterestRate = 0.003125;

let accountValue = 0;

for (let month = 1; month <= 6; month++) {
    accountValue = (accountValue + monthlySaving) * (1 + monthlyInterestRate);
    console.log("Month " + month + ": " + accountValue);
}

console.log("Final account value after 6 months: " + accountValue);