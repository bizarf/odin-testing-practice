const reverseString = (string) => {
    if (typeof string != 'string') return 'Error this is not a word'

    return string.split('').reverse().join('');
};

module.exports = reverseString;