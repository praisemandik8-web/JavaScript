const input = require("prompt-sync")();

const temp = Number(input("Ente a temperature value: "));

switch (true){

    case(temp < 0): 
        console.log("Freezing");
        break;
    case(temp > 0):
        console.log("Cold");
        break;
    case(temp > 15):
        console.log("Warm");
        break;
    case(temp > 25):
        console.log("High temperature");
        break;
}
