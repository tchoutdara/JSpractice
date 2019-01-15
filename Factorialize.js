function factorialize(num){
    var result = 1
    //This loop is to loop through 1 all the way up to num
    for (var i = 1; i <= num; i++){
    //When the loop hits each number it multiplies to the next number in the loop ex. 1*2*3*4*5=120
     result *= i
    }
    return result
}

console.log(factorialize(5))
