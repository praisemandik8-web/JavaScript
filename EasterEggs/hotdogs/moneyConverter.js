

const prompt = require("prompt-sync")();

let rate = Number(prompt("Enter exchange rate (1 USD to RMB): "));
let option = Number(prompt("Enter 0 to convert USD → RMB or 1 to convert RMB → USD: "));

if (option === 0) {
    let usd = Number(prompt("Enter amount in USD: "));
    let rmb = usd * rate;
    console.log(usd + " USD = " + rmb + " RMB");
}
else if (option === 1) {
    let rmb = Number(prompt("Enter amount in RMB: "));
    let usd = rmb / rate;
    console.log(rmb + " RMB = " + usd + " USD");
}
else {
    console.log("Error: Invalid option. Please enter 0 or 1.");
}