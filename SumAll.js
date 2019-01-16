function sumAll(arr){
    //this variable gets the smallest number in array
    var start = Math.min(arr[0], arr[1])
    //this variable gets the largest number in the array
    var end = Math.max(arr[0], arr[1])
    //this will be the final number after all the addition
    var total = 0
    //this loops through the number starting with variable start and end when it is less than or equal to variable end
    for (var i = start; i <= end; i++){
    //i is the number that increase after each loop till it end and the number through each loop is added to the total.
     total += i    
    }
    return total
}

console.log(sumAll([4, 44]))
