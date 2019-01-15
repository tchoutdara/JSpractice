function capsWords(str){
    //This takes the str and makes sure that everything is starting in lowercase and then each word is
    //an item in the array
    var words = str.toLowerCase().split (" ")
    //Loops through each word in the array until it hits all words
    for (var i = 0; i < words.length; i++){
        //i indicates which word and change letter position 0(1st letter) to upper case then add 
        //rest of the word from position 1(2nd letter)
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    //Join words back together at the space to make string
    return words.join(" ")
}

console.log(capsWords("hello how are you doing today?"))