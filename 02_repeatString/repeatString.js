const repeatString = function(rep, count) {
    let message = '';
    if (count < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < count; i++) {
        message = message.concat(rep);
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
