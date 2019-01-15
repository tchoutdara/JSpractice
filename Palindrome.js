function palindromeChecker(str){
    //Takes string and makes all letters lower case and cleans off any punctuation
    var cleanStr = str.toLowerCase().replace(/[^A-z0-9_]+/g, "")
    //Takes the string and splits all the letters in to individual item in an array then reverses the orer and connects the letters
    //back into a string
    var reversed = cleanStr.split("").reverse().join("")

    //If statement checking to see if the cleanedup string matches the reverse string
    if (cleanStr === reversed)
      return "This is a palindrome"
    else
      return "This is not a palindrome"  
}

console.log(palindromeChecker("RaceCar!!"))
