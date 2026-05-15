function balance(){
    const account = {accountName: "David", balance: 500}
    if(account.balance <1000){
    return "Low Balance"
    }
    else{
    return "Sufficient Balance"
    }
    

}
console.log(balance())
