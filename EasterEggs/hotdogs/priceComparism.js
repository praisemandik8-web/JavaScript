

const prompt = require("prompt-sync")();

let weight1 = Number(prompt("Enter weight of first package: "));
let price1 = Number(prompt("Enter price of first package: "));

let weight2 = Number(prompt("Enter weight of second package: "));
let price2 = Number(prompt("Enter price of second package: "));

let unitPrice1 = price1 / weight1;
let unitPrice2 = price2 / weight2;

if (unitPrice1 < unitPrice2) {
    console.log("Package 1 has the better price.");
} 
else if (unitPrice2 < unitPrice1) {
    console.log("Package 2 has the better price.");
} 
else {
    console.log("Both packages have the same unit price.");
}