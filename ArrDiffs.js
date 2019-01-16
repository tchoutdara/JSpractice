function unique(arr1, arr2){
    //Empty array to add differences of array
    var result = []
    //this loop runs through the first array and compares itself with each items in array 2
    for (var i = 0; i < arr1.length; i++){
        //If the item array does not match because it is -1 it will push that item to result array.
        if (arr2.indexOf(arr1[i]) === -1){
            result.push(arr1[i])
        }
    }    
    //this loop runs through the second array and compares itself with each items in array 1
    for (var x = 0; x < arr2.length; x++){
        //If the item array does not match because it is -1 it will push that item to result array.
        if (arr1.indexOf(arr2[x]) === -1){
            result.push(arr2[x])
        }
    } 
    return result
}

console.log(unique([1, 2, 3, 5, 6, 7, 8], [1, 2, 3, 4, 5]))
