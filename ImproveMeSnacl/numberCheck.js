function check(number){
    if(number < 0){
    let negative = "Number is negative"
    return negative;
    }

    else if(number == 0){
    let zero = "Number is zero"
    return zero;
    }

    else if(number > 0){
    let positive = "Number is positive"
    return positive;
    }

    else{
    return "invalid"
    }

}
console.log(check(-1));
console.log(check(0));
console.log(check(5));
