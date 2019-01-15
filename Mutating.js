function mutate(arr){
    //These variables for the two words jsut makes the lower case for easier verification
    var wordOne = arr[0].toLowerCase()
    var wordTwo = arr[1].toLowerCase()
    //thhis for loop goes through each letter of wordTwo if the letter from wordOne and wordTwo dont match it throws a -1 for false
    for (var letter of wordTwo) {
        if (wordOne.indexOf(letter) === -1)
         return false
    }
    return true
}

console.log(mutate(["grape", "grape"]))