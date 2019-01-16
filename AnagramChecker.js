function anagram(str1, str2){
    //Sorts both strings so if they are identical it can return true
    var sort1 = str1.split("").sort().join("")
    var sort2 = str2.split("").sort().join("")
    //if statement checking to see if the two strings match and returns true or false
    if (sort1 === sort2){
        return "This be an anagram"
    }
    return "No worky"
}

console.log(anagram("cinema", "iceman"))