const fibonacci = function(input) {
    const sequence = [1, 1];
    const position = Number(input);
    if (isNaN(position) || position < 0) return "OOPS"
    else if (position === 0) return 0
    else if (position > sequence.length - 1) {
        for (let i = 2; i < position; i++) {
          sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
