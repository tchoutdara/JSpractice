function itemRemover(arr, num){
    //array is spliced from index number 0 to num indicated by user then returned
    arr.splice(0, num)
    return arr
}

console.log(itemRemover(["apple", "peaches", "grapes", "oranges"], 2))