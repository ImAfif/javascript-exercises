const removeFromArray = function(...args) {

    const array = args[0]

    return array.filter(anything => !args.includes(anything))
};

// Do not edit below this line
module.exports = removeFromArray;
