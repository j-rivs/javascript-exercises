/*
    Structure
    storage variable
    get string length
    remove last character in string
        confirm string methods
        use array if necessary
    add last character removed to temp variable
    return temp variable
*/

const reverseString = function(reverse) {
    let holder = '';
    for (let i = reverse.length; i > 0; i--) {
        holder = holder.concat(reverse.slice((i-1), i));
    }
    return holder;
};

// Do not edit below this line
module.exports = reverseString;
