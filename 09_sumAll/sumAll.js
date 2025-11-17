const sumAll = function(a, b) {
    if (
        a < 0 ||
        b < 0 ||
        Math.floor(a) !== a ||
        Math.floor(b) !== b ||
        isNaN(a) ||
        isNaN(b)
    ) return "ERROR";
    const start = a < b ? a : b;
    const end = a < b ? b : a;
    let sum = 0;
    for (let i = start; i <= end; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
