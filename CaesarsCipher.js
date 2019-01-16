function letterRotation(str){
    //This is where the final result goes after loop
    var solved = ""
    //This loop goes through each letter of the string 
    for (var i = 0; i < str.length; i++){
        //This var holds the ascii number from each character
        var asciiNum = (str[i].charCodeAt())
        //if each number is >= 65 and <= 77 take the ascii number and add 13 then turn it into a string, then add to solved
        if (asciiNum >= 65 && asciiNum <= 77){
            solved += String.fromCharCode(asciiNum + 13)
            //if each number is >= 78 and <= 90 take the ascii number and subtract 13 then turn it into a string, then add to solved
        } else if (asciiNum >= 78 && asciiNum <= 90){
            solved += String.fromCharCode(asciiNum - 13)
            //if it is anything else just add to solved as is.
        } else {
            solved += str[i]
        }
    
    }
    return solved
}

console.log(letterRotation("SERR PBQR PNZC"))