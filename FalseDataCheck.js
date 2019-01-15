function dataCheck(arr){
    //This valid array holds all the non falsey items
    var valid = []
    //The loop goes through each item and if it is a falsey("", false, NaN) item it will not be pushed into the valid array
    for (var item of arr){
        //If not falsey add to valid array
        if (item) valid.push(item)
    }
    return valid
}

console.log(dataCheck(["hello", "there", 4, "", 6, false, NaN]))