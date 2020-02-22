/************************ Object Literal Extensions ********************/


// 1. Concise Properties
var x = 2, y = 3,
    o = {
        x: x,
        y: y
    };
//If it’s always felt redundant to say x: x all over, there’s good news

var x = 2, y = 3,
    o = {
        x,
        y
    };

// 2. Concise Methods

var o = {
    x: function () {
        // ..
    },
    y: function () {
        // ..
    }
}
// In Es6
var o = {
    x() {

    },
    y() {

    }
}

// 3. Concisely Unnamed
function runSomething(o) {
    var x = Math.random(),
        y = Math.random();
    return o.something(x, y);
}
runSomething({
    something: function something(x, y) {
        if (x > y) {
            // recursively call with `x`
            // and `y` swapped
            return something(y, x);
        }
        return y - x;
    }
});
// Here question may come why we are using something : function something...
// answer is simple, we want to do recursion, thus we want to refer itself.

// Other way can be :-
var controller = {
    makeRequest: function () {
        // ..
        controller.makeRequest();
    }
};

// Here are you sure controller is poining to same object ? may be a pitfall

// Other way may be to use this
btn.addEventListener("click", controller.makeRequest.bind(controller), false);


// With concise method :- 
runSomething({
    something(x, y) {
        if (x > y) {
            return something(y, x);
        }
        return y - x;
    }
});

// Will this work ? Umm no. because this will be interpreted as :-

runSomething({
    something: function (x, y) {
        if (x > y) {
            return something(y, x);
        }
        return y - x;
    }
});

// Thus the same problem

// Conclusion;

// So what are we left to conclude about concise methods? They’re short and sweet, and
// nice convenience. But you should only use them if you’re never going to need them to
// do recursion or event binding/unbinding. Otherwise, stick to your old school some
// thing: function something(..) method definitions.