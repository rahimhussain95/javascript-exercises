const palindromes = function (word) {
    const processed = word.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    const arrayword = processed.split('')
    const reversed = arrayword.reverse().join('');
    return processed === reversed;
};

// Do not edit below this line
module.exports = palindromes;
