var factorsOfaNumber=function (number){
    console.log(`the factors of ${number} are:`)
    for(let index=1;index<=number;index++){
        
        if(number%index==0){
            console.log(index)
        }
    }
}
factorsOfaNumber(10)