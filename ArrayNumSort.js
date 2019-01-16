function arrayAddAndSort(arr, num){
    //This sorts the array numerically
    arr.sort(function(a, b) {
        return a - b
    })
    //This loop goes through the array starting at index 0 until length of the array
    for (var i = 0; i < arr.length; i++){
        //The num is less than or equal to the array's item return the index postion to know where num should belong in array
        if (num <= arr[i]) {
            return i
        }
    }
    return arr.length
}

console.log(arrayAddAndSort([2, 4, 5, 6, 1, 100, 7], 8))
