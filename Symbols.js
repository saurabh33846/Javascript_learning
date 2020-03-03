/***************************** Symbols *************************/

// A new primitive type added to JS

var sym = Symbol("some optional description");
typeof sym; // "symbol"

// • You cannot and should not use new with Symbol(..). It’s not a constructor, nor
// are you producing an object.
// • The parameter passed to Symbol(..) is optional. If passed, it should be a string
// that gives a friendly description for the symbol’s purpose.
// • The typeof output is a new value ("symbol") that is the primary way to identify a
// symbol.


// The description is uesd for stringfication purpose of symbol

sym.toString(); // "Symbol(some optional description)"

//symbols are also not instances of Symbol

sym instanceof Symbol; // false

var symObj = Object(sym);
symObj instanceof Symbol; // true
symObj.valueOf() === sym; // true

// The internal value of a symbol itself — referred to as its name — is hidden from the
// code and cannot be obtained. You can think of this symbol value as an automatically
// generated, unique (within your application) string value.

// So what's purpose of introducing symbols ?

// The main point of a symbol is to create a string-like value that can’t collide with any
// other value. So for example, consider using a symbol as a constant representing an
// event name:

const EVT_LOGIN = Symbol("event.login");
evthub.listen(EVT_LOGIN, function (data) {
    // ..
});

// The benefit here is that EVT_LOGIN holds a value that cannot be duplicated (accidentally
// or otherwise) by any other value, so it is impossible for there to be any confusion
// of which event is being dispatched or handled.


// We can use symbol as property name, key. which we want to keep hidden

// Consider creation of a singleton class(function ).

const INSTANCE = Symbol("instance");
function HappyFace() {
    if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
    function smile() { }
    return HappyFace[INSTANCE] = {
        smile: smile
    };
}
var me = HappyFace(),
    you = HappyFace();
me === you;

// The INSTANCE symbol value here is a special, almost hidden, meta-like property
// stored statically on the HappyFace() function object.

/**************** Symbol Registry ********************/

// One mild downside to using symbols as in the last few examples is that the EVT_LOGIN
// and INSTANCE variables had to be stored in an outer scope (perhaps even the global
// scope), or otherwise somehow stored in a publicly available location, so that all parts
// of the code which need to use the symbols can access them.

// How to create a symbol in symbol registry

const EVT_LOGIN = Symbol.for("event.login");
console.log(EVT_LOGIN); // Symbol(event.login)

// And:
function HappyFace() {
    const INSTANCE = Symbol.for("instance");
    if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
    // ..
    return HappyFace[INSTANCE] = {};
}

// Symbol.for(..) looks in the global symbol registry to see if a symbol is already
// stored with the provided description text, and returns it if so. If not, it creates one to
// return. In other words, the global symbol registry treats symbol values, by description
// text, as singletons themselves.

// But if that is the case anyone who knows the description, will be able to retrive 
// the symbol. 

// By the way Symbols were introduced to remove the ambiguity introcued by arbitarty string
// values which may take special meaning. but now we are creating and retriving symbols using
// aribtary description.


// To avoid accidental collisions, you’ll probably want to make your symbol descriptions
// quite unique. One easy way of doing that is to include prefix/context/namespacing
// information in them.

function extractValues(str) {
    var key = Symbol.for("extractValues.parse"),
        re = extractValues[key] ||
            /[^=&]+?=([^&]+?)(?=&|$)/g,
        values = [], match;
    while (match = re.exec(str)) {
        values.push(match[1]);
    }
    return values;
}

/** Retrive description of symbol  */

var s = Symbol.for("something cool");
var desc = Symbol.keyFor(s);
console.log(desc); // "something cool"
// get the symbol from the registry again
var s2 = Symbol.for(desc);
s2 === s; // true

/********************* Symbols as Object Properties *************/
Object.getOwnPropertyNames( o ); // [ "foo","baz" ]

// To retrieve an object’s symbol properties:
Object.getOwnPropertySymbols( o ); // [ Symbol(bar) ]

// Built-in Symbols

// ES6 comes with a number of predefined built-in symbols that expose various meta
// behaviors on JavaScript object values. However, these symbols are not registered in
// the global symbol registry, as one might expect.
// Instead, they’re stored as properties on the Symbol function object. For example

// Symbol.iterator
var a = [1,2,3];
a[Symbol.iterator];