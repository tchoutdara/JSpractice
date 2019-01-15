function largestNums(arr){
    //Holds largest number from each inner array
    var maxNums = []
    //loops through the array layer
    for (var i = 0; i < arr.length; i++){
        //Temporary num holder from the inner array for verification
        var tempMax = arr[i][0]
        //loops through the inner array/2d array
        for (var x = 0; x < arr[i].length; x++){
         //this is the current item the loops is on
          var currentElement = arr[i][x]
          //if the current num is greater than or equal to whatever num is in tempmax, replace tempmax
          if (currentElement >= tempMax){
            //If statement is true make tempmax num the currentelement num
            tempMax = currentElement
          }
        }
        //Takes tempmax and add it to maxNums array
        maxNums.push(tempMax)
    }
    return maxNums
}

console.log(largestNums([[6,7,1,4],[60,3,30,0],[120,20,4,5],[10,15,78,2]]))