const leapYears = function() {
    let rem = arguments[0] % 4;
    if (rem ===0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
