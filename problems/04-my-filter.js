/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/
let myForEach = function(array, cb) {

    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        cb(el, i, array);
    }
};

//------------------------------------------------------------------------------

let myFilter = function(arr, cb) {
    let filteredArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {filteredArr.push(arr[i])}
    }

    return filteredArr;
};


let myFilter2 = function(arr, cb) {
    let filteredArr = [];

    myForEach(arr, function(el) {
        if (cb(el)) {filteredArr.push(el)}
    });

    return filteredArr;
};


let myFilter3 = function(arr, cb) {
    let filteredArr = [];

    arr.forEach( function(el) {
        if (cb(el)) {filteredArr.push(el)}
    });

    return filteredArr;
};


let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter2(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']

let result3 = myFilter3(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
