function strReverse(str){
    //Take a string and split each letter into an array, then reverse the order and rejoin them back into a string
    var reversed = str.split("").reverse().join("")
    return reversed
}

console.log(strReverse("Hello There!!!!"))