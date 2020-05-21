console.log('Hey there...');

/*********************** Es-6 Module Introduction *************************/

/**
 * Note: import and export should be in the top level scopr of their respective uses.
 * Ex. they can't be inside if condition
 *
 * -> export keyword can be put in front of declaration or used as an operator with special 
 *      bindings to export.
 * 
 *  examples.-
 */

        /** Named Exporting */
export function foo (){

}
export var awesome = 43;
var bar = [1,2,3];

// export bar is not allowed
export {bar};

//or other way

export {foo, awesome,bar};

// Note:- anyting which is not exported is private of that module
// If you say var bar = 34; this will be at module level. It will 
// not go to global level.


        /** Aliasing a export */
function foo1 () {

}
export {foo as fooAlias};

// Note:- Module exports are not just assignments but these are binding, 
// or you can say pointers to that variable. It means if you change that 
// vairable value inside module, regardless where and when it is imported
// that change will be reflected

//Consider:
var awesome = 42;
export { awesome };
// later
awesome = 100;

// Now awesome will resolve to 100 not 42 when it is imported.


// Note :- Although we can use multiple export in moodule but it is adviced to 
// use only one ** default** resolve. Name of binding is default.

// export default... only takes expression.
// To see the difference see below snippets:


function foo() {
    // ..
    }
export default foo;

function foo() {
    // ..
    }
export { foo as default };

// In the first snippet we are exporting binding to the function foo..
// means if later foo is assigned to different value, we will still be
// able to access function implementaation.

// In the second case we are exporting foo ... named export, which menas 
// if foo is assigned to some differnt var then it will be reflected to import.


// We should not do such export JS engine can't do optimisation to the plain object content

export default {
    foo() {  },
    bar() { },
    };

// This is allowed

export default function foo() {  }
export function bar() {  }
export function baz() {  }

// Other way is :

function foo() {  }
function bar() {  }
function baz() {  }
export { foo as default, bar, baz };


// We can re-export another module's exports

export { foo, bar } from "baz";
export { foo as FOO, bar as BAR } from "baz";
export * from "baz";

// In this case exports from baz does not come(imported) to our module
// they kind of pass through from our modules to the module which will
// import our module



/***** Importing API Members ******/
import { foo, bar, baz } from "foo";

// The "foo" string is called a module specifier. And it should be strictly be
// a string not a variable which hold string

//

import { foo } from "foo";
foo();

// 

import { foo as theFooFunc } from "foo";
theFooFunc();

//
import foo from "foo";
// or:
import { default as foo } from "foo";

//
export default function foo() {  }
export function bar() {  }
export function baz() {  }
// To import use the following
import FOOFN, { bar, baz as BAZ } from "foo";
FOOFN();
bar();
BAZ();

// Consider a "foo" module exported as
export function bar() {  }
export var x = 42;
export function baz() {  }
//You can import that entire API to a single module namespace binding:
import * as foo from "foo";
foo.bar();
foo.x; // 42
foo.baz();

// consider a world module
export default function foo() {  }
export function bar() {  }
export function baz() {  }
// And its import 
import foodd, * as  from "world";
foofn();
hello.default();
hello.bar();
hello.baz();


// All imported binding are immutable or readonly

foofn = 42; // (runtime) TypeError!
hello.default = 42; // (runtime) TypeError!
hello.bar = 42; // (runtime) TypeError!
hello.baz = 42; // (runtime) TypeError

// There are other module design philosophy which are designed 
// that consumer can extend or change module's API.
// Tthis can be done by exporting a plane object which can be changed
// by consumer

// Declaration done by import are hoisted

foo();
import { foo } from "foo";

// it loads and compiles and evaluate foo if not already done.
import "foo";

/******** Circular Module Dependency  **********/

// let's module A 
import bar from "B";
export default function foo(x) {
if (x > 10) return bar( x - 1 );
return x * 2;
}
// Module B
import foo from "A";
export default function bar(y) {
if (y > 5) return foo( y / 2 );
return y * 3;
}

// How this circular dependency is resolved :
// -> First let's say Module A is loaded. then if will read the file and then 
//      scan all the exports so that it can know all the binding which are availabe 
//      for imports
// -> Then it will see import B, it will load B, now in B also it will do same. then 
//      in B it will see import A, and now it already knows all the exports of A(from step1).


import foo from "foo";
foo( 25 );
// foo internally knows about bar.


/******************** Module Loading **********************/

// Import mechanism is provided by hosting env like browser...
// Mechanism system is Module Loader

// If hosting env is browser, it will interpret module string as URL
// if node js it will interpret it as filepath

        //****  Loading modules outside of modules ****
        // if we want to load a module inside a non-module file
Reflect.Loader.import( "foo" ) // returns a promise for `"foo"`
.then( function(fooNs){
foo.bar();
} );
// It imports module foo with namespace **fooNs**, like import * as fooNs

