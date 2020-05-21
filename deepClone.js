const deepClone = (inObj) =>{
    if (typeof inObj !== 'object' || inObj === null ) {
        return inObj;
    }
    var outObj = Array.isArray(inObj) ? [] : {};

    for (key in inObj) {
        var val = inObj[key];
        outObj[key] = (typeof val === 'object' && val !== null) ? deepClone(val) : val
    }
    return outObj;
}

