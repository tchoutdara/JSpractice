function itemKiller(arr){
  //this takes all the parameters and puts all the parameters in an array to use
  var args = Array.from(arguments)
  //This takes the array index 1 and on and it now array of numbers called target
  var target = args.slice(1)
  var result = []
  //This goes through each item of array and if the target nums does not match the array push the item into result
  for(var item of arr){
    if (target.indexOf(item) === -1){
        result.push(item)
    }
  }
  return result
}

console.log(itemKiller([1, 2, 3, 4, 1, 2, 3, 4], 2))
