// Default Parameter Values

function foo(x, y) {
    x = x || 11;
    y = y || 31;
    console.log(x + y);
}
foo(); // 42
foo(5, 6); // 11
foo(5); // 36
foo(null, 6); // 17 // null is considered as 0 ? need to know why.

/** failing case */
foo(0, 42); // 53 <-- Oops, not 42

/** To fix this  */

function foo(x, y) {
    x = (x !== undefined) ? x : 11;
    y = (y !== undefined) ? y : 31;
    console.log(x + y);
}

foo(0, 42); // 42
foo(undefined, 6); // 17

/** But can we even omit first argument ? simple answer is no.  */
// foo(,5) it is invalid

foo.apply(null, [, 5]) // it is valid but at end it is converted in [undefined, 5]

// If you investigate further, you’ll find you can only omit arguments on the end (i.e.,
//     righthand side) by simply passing fewer arguments than “expected”, but you cannot
//     omit arguments in the middle or at the beginning of the arguments list. It’s just not
//     possible.

// There’s a principle applied to JavaScript’s design here which is important to remember:
// `undefined` means missing. That is, there’s no difference between undefined and
// missing, at least as far as function arguments go.

/** default arguments in Es6  */

function foo(x = 11, y = 31) {
    console.log(x + y);
}

foo(); // 42
foo( 5, 6 ); // 11
foo( 0, 42 ); // 42
foo( 5 ); // 36
foo( 5, undefined ); // 36 <-- `undefined` is missing
foo( 5, null ); // 5 <-- null coerces to `0`
foo( undefined, 6 ); // 17 <-- `undefined` is missing
foo( null, 6 ); // 6 <-- null coerces to `0`