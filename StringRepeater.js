function repeatStr(str, num) {
    //Final is used to gather the str
    var final = ""
    //This is a intial check to make sure the num is not negative
    if (num < 0) return ""
    //This loops as many times as num and through each loop str is added to the variable final with a space.
    for (var i = 0; i < num; i++){
      final += str + " "
    }
    return final
}

console.log(repeatStr("Hello", 3))
