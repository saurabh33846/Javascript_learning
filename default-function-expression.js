/** Function defaults can be more than simple value lke 32, it can also be expressioon */

function bar(val) {
    console.log("bar called!");
    return y + val;
}
function foo(x = y + 3, z = bar(x)) {
    console.log(x, z);
}
var y = 5;
foo(); // "bar called"
// 8 13
foo(10); // "bar called"
// 10 15
y = 6;
foo(undefined, 10);

//they’re
// only run if and when they’re needed — that is, when a parameter’s argument is omitted
// or is undefined.



var w = 1, z = 2;
function foo(x = w + 1, y = x + 1, z = z + 1) {
    console.log(x, y, z);
}

// in function expression function (...) this calls a scope, to evaluate first it sees whether
// value is present inside the scope or not, then it looks parent scope

// in above case x= w+1, inisialise x (w is in outeer scope)
// y = x+1 insialize y, x has already inisialised
// z = z+1 fails, because z is already present in scope and it has not 
// been inisialised, so it does not go outer scope to look it

// This is same as TDZ( Temporal dead zone ) as present with undeclared let variable.
foo(); // // ReferenceError


// we can use IIFE for default value expression

function foo(x =
    (function (v) { return v + 11; })(31)
) {
    console.log(x);
}
foo();

// Note : don't try to access x innside IIFE, it will fall under TDZ

// In this case cb, will be a reference to function, not executing the function as case with IIFE

function ajax(url, cb = function () { }) {
    // ..
}
ajax("http://some.url.1");