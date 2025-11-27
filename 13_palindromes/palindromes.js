const palindromes = function (string) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
    const original = string
    .toLowerCase()
    .split('')
    .filter(item => alphanum.includes(item))
    .join('');
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
