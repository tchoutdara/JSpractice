function strEnding(str, target){
  //This if statement checks the to see if the if the back string matches the target(back of string because -)
  //Target length makes it verify based on how many letters are placed in the target, then returns treu or false statements
  if (str.substr(-target.length) === target){
      return true
  }
  return false
}

console.log(strEnding("Choutdara", "a"))
