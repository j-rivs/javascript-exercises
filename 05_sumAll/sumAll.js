const sumAll = function() {
    let large = arguments[0];
    let small = arguments[1];
    if (arguments[0] < arguments[1]) {
        large = arguments[1];
        small = arguments[0];
    }

    console.log(large);
    console.log(small);

    if ((typeof large) !== 'number'|| (typeof small) !== 'number') {
        return 'ERROR';
    }
    if (large < 0 || small < 0) {
        return 'ERROR';
    }

    let sum = 0;

    for (let i = small; i <= large; i++) {
        sum = sum + i;
    }

    return sum;
};

/*
Check arguments for 'number'
    return Error if not
Check which argument is bigger
    Assign variable to higher and lower arg

Create return variable
Loop between variables
    add / += into sum variable


*/

// Do not edit below this line
module.exports = sumAll;
