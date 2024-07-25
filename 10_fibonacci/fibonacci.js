const fibonacci = function(index) {
    fibo = [1, 1];
    if (index == 0){
        return 0;
    }
    else if (index < 0){
        return 'OOPS';
    }
    else if (index <= 2){
        return 1;
    }
    for (let i = 2; i <= index; i++){
        let current = fibo[i - 2] + fibo[i - 1];
        fibo.push(current);
    }
    return fibo[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
