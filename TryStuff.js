function arrayInc(arr, num){
    //This is a new array that houses the new increased array
    var scaledArr = []
    //This loops through the supplied array and adds a specified num then makes the a new number variable called add
    for (var i = 0; i < arr.length; i++){
        var add = arr[i] + num
        //this pushes add into the new array
        scaledArr.push(add)
    }
    return scaledArr
}

console.log(arrayInc([1, 2, 3, 4], 3))