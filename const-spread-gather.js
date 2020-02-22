// Consts

{
    const a = [1, 2, 3];
    a.push(4);
    console.log(a); // [1,2,3,4]
    a = 42; // TypeError!
}

// Assigning an object or array as a constant means that value will
// never be able to be garbage collected, since the reference to the
// value can never be unset. That may be desirable, but be careful if it’s
// not your intent!

// Spread / Rest

// ES6 introduces a new ... operator that’s typically referred to as the spread or rest
// operator, depending on where/how it’s used

function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1, 2, 3]);

// When ... is used in front of an array (actually, any iterable, which we cover in Chapter
//     3), it acts to “spread” it out into its individual values.

foo.apply(null, [1, 2, 3]); // 1 2 3

var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b); // [1,2,3,4,5]
//In this usage, ... is basically replacing concat(..), as the above behaves like [1].con
//cat( a, [5] ).

/** Uses of ... as gather operator */

function foo(x, y, ...z) {
    console.log(x, y, z);
}
foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]

// course, if you don’t have any named parameters, the ... gathers all arguments:

function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1,2,3,4,5]

// arguments is not a array, it's an array like object.

// doing things the new ES6 way
function foo(...args) {
    // `args` is already a real array
    // discard first element in `args`
    args.shift();
    // pass along all of `args` as arguments
    // to `console.log(..)`
    console.log(...args);
}
// doing things the old-school pre-ES6 way
function bar() {
    // turn `arguments` into a real array
    var args = Array.prototype.slice.call(arguments);
    // add some elements on the end
    args.push(4, 5);
    // filter out odd numbers
    args = args.filter(function (v) {
        return v % 2 == 0;
    });
    // pass along all of `args` as arguments
    // to `foo(..)`
    foo.apply(null, args);
}
bar(0, 1, 2, 3);