function stringify(inp, set) {
    let vistitedSet = set || new Set();
    if(vistitedSet.has(inp)) {
        throw new Error('Circular Dependency exist');
    }
    if(typeof inp === 'boolean' || typeof inp === 'number' || inp === undefined || inp === null) {
        return ""+inp;
    }
    if(typeof inp === 'string') {
        return '"'+inp + '"';
    }

    if(Array.isArray(inp)) {
        let result = "[";
        for(const value of inp) {
            vistitedSet.add(inp);
            result = result + stringify(value, vistitedSet);
            result= result +","
        }
        result = result.slice(0, result.length-1) + "]";
        return result
    }
    
    if(typeof inp === 'object') {
        let result = "{";
        for(const key in inp) {
            result=result +'"'+ key+'"';
            vistitedSet.add(inp);
            result = result + ':'+stringify(inp[key], vistitedSet);
            result = result+","
        }
        result = result.slice(0, result.length-1) +"}"
        return result;
    }
   
}
console.log( stringify(1));


let ex1 = {
	val: "val",
	bool: true,
	skills: [{ name: "react", skills: [1, 2, 3, 4] }, 4, 5, 6, 7, 8],
};
let ex2 = "val"
let ex3 = [{name:"name"},true]
ex1.val = ex1 


// console.log(stringify(ex1) === JSON.stringify(ex1));
// console.log(stringify(ex2) === JSON.stringify(ex2));
// console.log(stringify(ex3) === JSON.stringify(ex3));
// console.log(stringify(ex1))
// console.log(JSON.stringify(ex1))

stringify(ex1)
