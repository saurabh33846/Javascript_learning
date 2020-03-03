/*********** Arrow Functions  ***********/
var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x, y) => {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};

//Arrow functions are always function expressions; there is no arrow function declaration.
// It also should be clear that they are anonymous function expressions — they
// have no named reference for the purposes of recursion or event binding/unbinding.

// it’s probably more sensible and reasonable to adopt => for the places in code
// where you do need short inline function expressions, but leave your normal-length
// main functions as-is.


/*** Beaviour of this with arrow functions *****/

var controller = {
    makeRequest: function () {
        var self = this;
        btn.addEventListener("click", function () {
            // 
            self.makeRequest();
        }, false);
    }
};

// Lexical this in the arrow function callback in the previous snippet now points to the
// same value as in the enclosing makeRequest() function. In other words, => is a
// syntactic stand-in for var self = this.

// Because in arrow functions this is statically bound to outer lexcial scope of arrow
// function.

var controller = {
    makeRequest: function () {
        btn.addEventListener("click", () => {
            this.makeRequest();
        }, false);
    }
};

// In this snippet though, this points to lexical outer scope of makeRequest, here it is global

var controller = {
    makeRequest: () => {
        // 
        this.helper();
    },
    helper: () => {
        // 
    }
};
controller.makeRequest();


// when to use and not to use arrow function 

// 1. If you have a short, single-statement inline function expression, where the only
// statement is a return of some computed value, and that function doesn’t already
// make a this reference inside it, and there’s no self-reference (recursion, event
// binding/unbinding), and you don’t reasonably expect the function to ever be that
// way, you can probably safely refactor it to be an => arrow function.

// 2. If you have an inner function expression that’s relying on a var self = this
// hack or a .bind(this) call on it in the enclosing function to ensure proper this
// binding, that inner function expression can probably safely become an => arrow
// function

// 3.If you have an inner function expression that’s relying on something like var
// args = Array.prototype.slice.call(arguments) in the enclosing function to
// make a lexical copy of arguments, that inner function expression can probably
// safely become an => arrow function.