const analyzeArray = require('../scripts/analyzeArray');

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    const object = analyzeArray([63, 26, 46, 78, 91, 33, 45, 67]);
    expect(object).toEqual({
        average: 56.125,
        min: 26,
        max: 91,
        length: 8
    });
});

test('takes a string and returns an error message', () => {
    const object = analyzeArray('This is a test');
    expect(object).toBe('Error. This is not an array.');
});

test('takes an array that has a mix of numbers and strings, and returns an error message', () => {
    const object = analyzeArray([1, 8, 3, 4, '5', '8']);
    expect(object).toBe('Error. The array contains non-integers.');
});