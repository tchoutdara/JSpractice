function arraySplit(arr, size){
    //This a empty array to put house smaller grouped arrays
    var group = []
    //While the length of the array is greater that 0 slice the array upto the size and push into group array
    while (arr.length > 0) {
      group.push(arr.slice(0, size))
      //this is removing the num of items based on size and that is now the new arr the while loop checks to see if it is greater
      //than 0
      arr = arr.slice(size)
    }
    return group
}

console.log(arraySplit([0, 1, 2, 3, 4, 5, 6, 7], 2))
