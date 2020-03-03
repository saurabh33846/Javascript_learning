/**** for of loops */

var a = ["a", "b", "c", "d", "e"];
for (var idx in a) {
    console.log(idx);
}
// 0 1 2 3 4

for (var val of a) {
    console.log(val);
}
// "a" "b" "c" "d" "e"

for (var c of "hello") {
    console.log(c);
}
// "h" "e" "l" "l" "o"

// for of loop only works with iterable objects

// By default these are iterables
// . arrays
// • strings
// • generators
// • collections / TypedArrays


// In for (XYZ of ABC).., the XYZ clause can either be an assignment expression or a
// declaration, identical to that same clause in for and for..in loops
var o = {};
for (o.a of [1,2,3]) {
console.log( o.a );
}
// 1 2 3

// this is with destructuring 

// flow of execution is as follows:

// step 1. {x:o.a} = {x:1}
// setp 2. thus o.a= x = 1
// setp 3. body of loop
// setp 4. {x:o.a} = {x:2}
// setp 5. thus o.a = 2 .... and so on

for ({x: o.a} of [ {x: 1}, {x: 2}, {x: 3} ]) {
console.log( o.a );
}
// 1 2 3
