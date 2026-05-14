const prompt = require("prompt-sync")();

function validateLogin(inputUsername, inputPassword){
     let logs = {username: "Ancestor", password: "12345"};
      inputUsername = prompt("Enter ya username boss ");
      inputPassword = prompt("Enter ya passsword og ")
        if(logs.username === inputUsername && logs.password === inputPassword ){
        let message = "Login successful";
        return message
        }
        else{
        let message2 = "Unsucessful login";
        return message2
        }
}

console.log(validateLogin("Ancestor", "12345"))
