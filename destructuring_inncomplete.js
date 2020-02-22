/***************** Destructurring **********************/


// Manually assigning indexed values from an array or properties from an object can be
// thought of as structured assignment. To put this into ES6 terms, it’s called destructuring
// assignment.

// Manually assigning values returned from 

function foo() {
    return [1, 2, 3];
}
var tmp = foo(),
    a = tmp[0], b = tmp[1], c = tmp[2];
console.log(a, b, c);

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
var tmp = bar(),
    x = tmp.x, y = tmp.y, z = tmp.z;
console.log(x, y, z);

// With new es6 syntax we can do this as follows:

var [a, b, c] = foo();
var { x: x, y: y, z: z } = bar();
console.log(a, b, c); // 1 2 3
console.log(x, y, z);

// If the property we want to assing is same as coming(returned) from the function the shortcut is
var { x, y, z } = bar();
console.log(x, y, z); // 4 5 6

// But this assingment give us ability to name variables differently
var { x: bam, y: baz, z: bap } = bar();
console.log(bam, baz, bap); // 4 5 6
console.log(x, y, z); // ReferenceError

// In normal object property assignment flow is : target:source
// But in object destructring the parttern is : source:target
var aa = 10, bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log(AA, BB);


/*** Nested Destructring  */

var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };
var [a, [b, c, d], e] = a1;
var { x: { y: { z: w } } } = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6


var App = {
    model: {
        User: function () { }
    }
};
// instead of:
// var User = App.model.User;
var { model: { User } } = App;

/********** Destructuring Defaults + Parameter Defaults **************/

function f6({ x = 10 } = {}, { y } = { y: 10 }) {
    console.log(x, y);
}
f6(); // 10 10

// Steps of execution 
//  1. First of all assignment happens. Means if we have passed any param while calling function
//     it is assigned to destructuring expression, if not then default is assigned.AA
//  2. In second step destructruring expression is evalluated and if value of x and y is 
//     calculated

// thus execution for x is as follows -> param1 is undefined thus {x=10} = {},
// because {} does not have x so value of x = 10

// for y, param2 , is undefined, thus {y} = {y:10}, thus y = 10

f6({}, {}); // 10 undefined

// Why? 
// 1. param1 = {}, so {x:10 }=param1, {x:10}= {}, x= 10
// 2. param2 = {}, so {y}= {}, thus y = undefined.


/*************** Nested Defaults: Destructured and Restructured **************/

// let's say we have some defaullt settings
var defaults = {
    options: {
        remove: true,
        enable: false,
        instance: {}
    },
    log: {
        warn: true,
        error: true
    }
};

// Let's say we have config

var config = {
    options: {
        remove: false,
        instance: null
    }
};

// Goal is to merge confing with default, such that, whatever is there is config will override default and

// Try 1. 
config = Object.assign({}, defaults, config);
// but this will not work as object.assign does only shallow copy

// Other way, destructuring + Restructring

// config.options = config.options || {};
// config.log = config.log || {};
// {
//     options: {
//         remove: config.options.remove = default.options.remove,
//             enable: config.options.enable = default.options.enable,
//                 instance: config.options.instance = default.options.instance
//     } = { },
//     log: {
//         warn: config.log.warn = default.log.warn,
//             error: config.log.error = default.log.error
//     } = { }
// } = config;

// Other concise way of doing the same is 

// merge `defaults` into `config`

{

        // destructure (with default value assignments)
    let { options: { remove = defaults.options.remove,
        enable = defaults.options.enable,
        instance = defaults.options.instance } = {},
        log: { warn = defaults.log.warn,
            error = defaults.log.error } = {} } = config
        // restructure
        config = {
            options:{remove,enable,instance},
            log:{warn,error}
        }
}