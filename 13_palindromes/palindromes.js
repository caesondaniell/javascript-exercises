const palindromes = function (string) {
    const original = string
    .split(' ')
    .join('')
    .split('.')
    .join('')
    .split(',')
    .join('')
    .split('?')
    .join('')
    .split('!')
    .join('')
    .split('-')
    .join('')
    .split(';')
    .join('')
    .split("'")
    .join('')
    .toLowerCase();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
