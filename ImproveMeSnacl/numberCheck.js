function check(number){
    if(number < 0){
    let negPrompt = "Number is negative"
    return negPrompt;
    }

        if(number == 0){
    let zeroPrompt = "Number is zero"
    return zeroPrompt;
    }

        if(number > 0){
    let posPrompt = "Number is positive"
    return posPrompt;
    }

}
console.log(check(-1));
console.log(check(0));
console.log(check(5));
