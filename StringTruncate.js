function truncateStr(str, num){
  //If num is greater than or equal to target truncate number just return string, if not move on
  if (num >= str.length) return str
    //If num is less than or equal to 3 return str slice from beginning letter upto num and then add ...
    if (num <= 3) return str.slice(0, num) + "..."
    //else remove 3 to stay within num target and add ...
    return str.slice(0, num-3) + "..."
}

console.log(truncateStr("Hello there, how are you today", 9))