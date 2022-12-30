const leapYears = function() {
    let cent = arguments[0];
    let rem = arguments[0] % 4;
    if (rem === 0) {
        if (cent % 100 === 0 && cent % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
