/************ Template Literals ************/

// Other name is - Interpolated String Literals.

// Es6 allow by using ` back-tick we can define a string in which we can
// embed basic expression which will be evaluated

var name = "Kyle";
var greeting = "Hello " + name + "!";
console.log(greeting); // "Hello Kyle!"
console.log(typeof greeting);

// In Es6 Way
var greeting = `Hello ${name}!`;
console.log(greeting); // "Hello Kyle!"
console.log(typeof greeting); // "string"


// One really nice benefit of interpolated string literals is they are allowed to split across
// multiple lines:

var text =
    `Now is the time for all good men
to come to the aid of their
country!`;
console.log(text);

// Interpolated Expressions

function upper(s) {
    return s.toUpperCase();
}

var who = "reader";
var text = `A very ${upper("warm")} welcome to 
all the ${upper(`${who}s`)}`;

console.log(text);

// Expression Scope

// Expression scope of varibles appearing inside template literal is
// Same as we find in IIFE.

function foo(str) {
    var name = "foo";
    console.log(str);
}
function bar() {
    var name = "bar";
    foo(`Hello from ${name}!`);
}
var name = "global";
bar();

// Tagged Template Literals


// It’s essentially a special kind of function call that doesn’t need the ( .. ). The tag —
// the foo part before the \..\`` string literal — is a function value that should be called.


// The first argument — we called it strings — is an array of all the plain strings (the
//     stuff between any interpolated expressions). We get two values in the strings array:
//     "Everything is " and "!".

// The argument(s) gathered into our values array are the results of the alreadyevaluated
// interpolation expressions found in the string literal. So obviously the only
// element in values in our example is "awesome".

// You can think of these two arrays as: the values in values are the separators if you
// were to splice them in between the values in strings, and then if you joined all those
// strings, you’d get the complete interpolated string value.


// A tagged string literal is like a processing step after the interpolations are evaluated
// but before the final string value is compiled, allowing you more control over generating
// the string from the literal.

function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
}
var desc = "awesome";
foo`Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]

// The part foo can be any valid expression which return a function

function bar() {
    return function foo(string, ...values) {
        console.log(`called inside fooo with param `)
        console.log(string);
        console.log(values);
    }
}
var name = 'saurabh'
bar()`calling with ${name}`;

// foo is a tag. which is invoked with template literals. Thus it is called tagged template literals



// A tagged string literal is like a processing step after the interpolations are evaluated
// but before the final string value is compiled, allowing you more control over generating
// the string from the literal.


// array.reduce is a function which reduces array into a single value.

function dollabillsyall(strings, ...values) {
    return strings.reduce(function (s, v, idx) {
        if (idx > 0) {
            if (typeof values[idx - 1] == "number") {
                // look, also using interpolated
                // string literals!
                s += `$${values[idx - 1].toFixed(2)}`;
            }
            else {
                s += values[idx - 1];
            }
        }
        return s + v;
    }, "");
}
var amt1 = 11.99,
    amt2 = amt1 * 1.08,
    name = "Kyle";
var text = dollabillsyall
    `Thanks for your purchase, ${name}! Your
    product cost was ${amt1}, which with tax
    comes out to ${amt2}.`
console.log(text);
    // Thanks for your purchase, Kyle! Your
    // product cost was $11.99, which with tax
    // comes out to $12.95.