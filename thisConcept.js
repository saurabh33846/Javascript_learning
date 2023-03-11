// Rules of deciding this

// 1. If function is called using new keyword, use the new object created as this.
// 2. If function is called using call, apply, bind , use that.
// 3. If function is called via some containging/ owning object, we use that.
// 4. Default Rule, Global object( except Strict mode)
// New keyword, Class in JS

function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();

/*
 Four things happens when we call new in front of function, ( Constructor call say)
 1. A new object is created.
 2. Function is called considering this as new Object.
 3. Function.Prototype is linked as prototype of Newly created Object.
 4. New Object is returned.
*/
