function whatName(collection, source){
    //This gets the argumment keys
    var keys = Object.keys(source)
    //Go through the collection and check for the keys that match if not then move onto the next object.
    return collection.filter(function(obj){
        for (var key of keys){
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]){
                return false
            }
        }
        return true
    })
}

console.log(whatName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2}))