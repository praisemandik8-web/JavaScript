const prompt = require("prompt-sync")()

const number = Math.floor(Math.random() * 3);

let input = Number(prompt("Enter 0 for rock, 1 for paper and 2 for scissors: "));

if (input === number){
console.log(`i am ${number}, and you are ${input}, its a draw`);
}
else if((input == 0 && input == 2) || (input == 1 && number == 0) || (input == 2 && number == 1)){
console.log(`i am ${number}, and you are ${input}, CONGRATULATIONS, YOU WIN!!`);
}
else{
console.log(`i am ${number}, and you are ${input}, You lost, Try again`);
}
