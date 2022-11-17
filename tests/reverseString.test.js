const reverseString = require('../scripts/reverseString');

test('takes a string with one word and reverses it', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('takes a string with two words and reverses it', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('takes a empty string and returns nothing', () => {
    expect(reverseString('')).toBe('');
});

test('takes a empty string and returns nothing', () => {
    expect(reverseString(123456789)).toBe('Error this is not a word');
});

test('takes a string where the first character is a space and reverses it with the empty space at the end', () => {
    expect(reverseString(' banana')).toBe('ananab ');
});

test('takes a string where the last character is a space and reverses it with the empty space at the front', () => {
    expect(reverseString('apple ')).toBe(' elppa');
});