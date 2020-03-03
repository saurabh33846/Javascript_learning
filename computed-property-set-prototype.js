/*** Computed property value *****/

// Before Es6
var o = {
    baz: function () { }
};
o[prefix + "foo"] = function () { };
o[prefix + "bar"] = function () { };

// With Es6

var prefix = "user_";
var o = {
    baz: function () { },
    [prefix + "foo"]: function () { },
    [prefix + "bar"]: function () { }
};

//Any valid expression can appear inside the [  ] that sits in the property name
//position of the object literal definition.


// Computed property with concise method
var o = {
    ["f" + "oo"]() { }, // computed concise method
    ["b" + "ar"]() { } // computed concise generator
};

// Setting [[Prototype]]

var o1 = {
    // ..
};
var o2 = {
    __proto__: o1,
    // ..
};

// With new Es6
var o1 = {
    // ..
};
var o2 = {
    // ..
};
Object.setPrototypeOf(o2, o1);

// Object super
var o1 = {
    foo() {
        console.log("o1:foo");
    }
};
var o2 = {
    foo() {
        super.foo();
        console.log("o2:foo");
    }
};
var o3 = {
    foo(){
        super.foo()
    }
}
Object.setPrototypeOf(o2, o1);
Object.setPrototypeOf(o3,o2);
o2.foo(); // o1:foo
    // o2:foo
o3.foo();

// super is only allowed in concise methods, not regular function
// expression properties. It also is only allowed in super.XXX form
// (for property/method access), not in super() form.