const palindromes = function (string) {
    const original = string
    .split('')
    .filter(item => 
           !(item.includes(" ") ||
            item.includes(".") ||
            item.includes(",") ||
            item.includes("!") ||
            item.includes("?") ||
            item.includes("-") ||
            item.includes(";") ||
            item.includes("'")))
    .join('')
    .toLowerCase();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
