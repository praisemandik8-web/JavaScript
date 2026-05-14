const prompt = require("prompt-sync")();

function login(username, password){
        let storedUsername = "88888"
        let storedPassword = "12345"

         username = prompt("Enter your username, Chairman ")
         password = prompt("Punch in your password! ")

        if(storedUsername == username && storedPassword == storedPassword){
        let newPrompt = "Login successful!"
        return newPrompt;
        }
        else{
        let failedPrompt = "invalid login"
        return failedPrompt;
        }
}
console.log(login(88888, 12345));
