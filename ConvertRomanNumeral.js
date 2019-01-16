function convertRoman(num){
    //This is creating an object
    var romanToNum = {
        M: 1000, CM: 900, D: 500, CD: 400, 
        C: 100, XC:90, L: 50, XL: 40, 
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    //This variable holds the keys/roman numeral
     var roman = ""
    //Loops through items in romanToNum
     for (var key in romanToNum){
         //As long as the num given is >= the value of each key it adds that key to the roman variable, but that number also
         //needs to subtract that key value from num, so while loop can end.
         while (num >= romanToNum[key]) {
             roman += key;
             num -= romanToNum[key]
         }
     }
     return roman
}

console.log(convertRoman(3567))