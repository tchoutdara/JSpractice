function findLongestWord(str){
//Create a array out of the sentence and each word is split at the spaces
  var wordArr = str.split(" ")
//Bucket to hold the longest word
  var longest = ""

//For loop that goes through each word of the array and verifies if the word is longer that current longest word it replaces it
  for (var word of wordArr){
      if ( word.length > longest.length) longest = word
   }
//Return the longest word in a sentence 
  return "The longest word is " + longest + " and it has " + longest.length + " letters."
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
