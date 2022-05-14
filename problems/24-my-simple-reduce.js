/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/


let mySimpleReduce = function(arr, cb) {
    let acc = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let el = arr[i];
        acc = cb(acc, el);
    }

    return acc;
};

let myReduce = function(arr, cb, ival) {
    let acc;

    if (ival === undefined) {
        acc = arr[0];

        for (let i = 1; i < arr.length; i++) {
            let el = arr[i];
            acc = cb(acc, el);
        }
    } else {
        acc = ival;

        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            acc = cb(acc, el);
        }
    }

    return acc;
};

//------------------------------------------------------------------------------

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

let test = [4, 6, 2, 8, 3].reduce( function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log("test: " + test); // 8)

let result4 = myReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
}, 86);

console.log("with inital: " + result4); // 100

let result5 = myReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log("w/o initial: " + result5); // 48

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
