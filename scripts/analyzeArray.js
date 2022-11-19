const analyzeArray = (array) => {
    if (Array.isArray(array) === false) return 'Error. This is not an array.'

    if (array.every(element => typeof element === 'number') === false) return 'Error. The array contains non-integers.'

    const average = (array) => {
        return array.reduce((a, b) => a + b, 0) / array.length;
    };
    return {
        average: average(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
};

module.exports = analyzeArray;