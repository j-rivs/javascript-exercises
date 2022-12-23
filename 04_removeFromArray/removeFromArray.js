const removeFromArray = function() {
    let numbs = arguments[0];

    for (let i = 0; i < arguments.length;i++) {
            for (let n = 0; n < numbs.length; n++) {
                if (numbs[n] === arguments[i]) {
                    numbs.splice(n, 1);
                }
            }
    }

    return numbs;
};

// Do not edit below this line
module.exports = removeFromArray;
