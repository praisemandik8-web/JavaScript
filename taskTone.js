const prompt = require("prompt-sync")();
    let length= +prompt("base ")
    let width= +prompt("height ")
    let area = 0.5*(length*width);
console.log("Area is ", area);
