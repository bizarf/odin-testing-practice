const capitalize = require('../scripts/capitalize');

test('takes a lowercase string and returns string with first character capitalized', () => {
    expect(capitalize('test')).toBe('Test');
});

test('takes a capitalized string and returns the string capitalized', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

test(`takes a string where the first character is not a letter and returns error`, () => {
    expect(capitalize('6sdfdsf')).toBe('Error the first character is not an alphabetic letter');
});

test('takes an empty string and returns an error', () => {
    expect(capitalize('')).toBe('Error. You have not provided a word.');
});

test('takes a string where the first character is empty and returns an error', () => {
    expect(capitalize(' dfsdlkfjsdlf')).toBe('Error the first character is not an alphabetic letter');
});