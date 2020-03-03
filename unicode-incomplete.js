/*************** Number Literal Extension ****************/

// Prior to es6 , this is non standrize form and default de-facto agreement by browsers
Number("42"); // 42
Number("052"); // 52
Number("0x2a"); // 42

// With Es6 this is the new way and standerd, introduced a new binary form
var dec = 42,
    oct = 0o52, // or `0O52` :(
    hex = 0x2a, // or `0X2a` :/
    bin = 0b101010; // or `0B101010` :/

// The only decimal form allowed is base-10. Octal, hexadecimal, and binary are all
// integer forms.


// String form of these is converted into their respective number form

Number("42"); // 42
Number("0o52"); // 42
Number("0x2a"); // 42
Number("0b101010"); // 42

// conversion from decimal to specified form

var a = 42;
a.toString(); // "42" -- also `a.toString( 10 )`
a.toString(8); // "52"
a.toString(16); // "2a"
a.toString(2); // "101010"

/**************** Unicode ******************/

// https://conferences.oreilly.com/fluent/javascript-html-2015/public/content/2015/02/18-javascript-loves-unicode

// The Unicode characters that range from 0x0000 to 0xFFFF contain all the standard
// printed characters (in various languages) that you’re likely to have seen or interacted
// with. This group of characters is called the Basic Multilingual Plane (BMP). The BMP
// even contains fun symbols like this cool snowman ☃ (U+2603

var snowman = "\u2603";
console.log(snowman);

// To represent an astral
// character using Unicode escaping prior to ES6, you need to use a surrogate pair —
// basically two specially calculated Unicode-escaped characters side-by-side, which JS
// interprets together as a single astral character:

var gclef = "\uD834\uDD1E";
console.log(gclef);

// As of ES6, we now have a new form for Unicode escaping (in strings and regular
// expressions), called Unicode code point escaping:
var gclef = "\u{1D11E}";
console.log(gclef); // "𝄞 "

/************ Unicode-Aware String Operations *********/
// By default, JavaScript string operations and methods are not sensitive to astral symbols
// in string values. So, they treat each BMP character individually, even the two surrogate
// halves that make up an otherwise single astral character. Consider:


var snowman = "☃";
snowman.length; // 1
var gclef = "𝄞";
gclef.length; // 2

var gclef = "𝄞";
[...gclef].length; // 1
Array.from( gclef ).length; // 1

// Wait ... why did that happen ?
// well array iterator is unicode aware, thus it treats this char as single char.
// thus length is 1
