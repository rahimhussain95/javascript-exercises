const removeFromArray = function(array, ...args) {
    const Narray = [];

    array.forEach((value) => {
        if (!args.includes(value)){
            Narray.push(value);
        }
    })
    return Narray;
};

// Do not edit below this line
module.exports = removeFromArray;
