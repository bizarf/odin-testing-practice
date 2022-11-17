const calculator = require('../scripts/calculator')

test('two plus two', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(2, 2)).toBeGreaterThan(3);
    expect(calculator.add(2, 2)).toBeGreaterThanOrEqual(4);
    expect(calculator.add(2, 2)).toBeLessThan(5);
    expect(calculator.add(2, 2)).toBeLessThanOrEqual(4);
});

test('ten minus four', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
    expect(calculator.subtract(10, 4)).toBeGreaterThan(5);
    expect(calculator.subtract(10, 4)).toBeGreaterThanOrEqual(6);
    expect(calculator.subtract(10, 4)).toBeLessThan(7);
    expect(calculator.subtract(10, 4)).toBeLessThanOrEqual(6);
});

test('one hundred divided by twenty five', () => {
    expect(calculator.divide(100, 25)).toBe(4);
    expect(calculator.divide(100, 25)).toBeGreaterThan(3);
    expect(calculator.divide(100, 25)).toBeGreaterThanOrEqual(4);
    expect(calculator.divide(100, 25)).toBeLessThan(5);
    expect(calculator.divide(100, 25)).toBeLessThanOrEqual(4);
});

test('nine multiplied by two', () => {
    expect(calculator.multiply(9, 2)).toBe(18);
    expect(calculator.multiply(9, 2)).toBeGreaterThan(17);
    expect(calculator.multiply(9, 2)).toBeGreaterThanOrEqual(18);
    expect(calculator.multiply(9, 2)).toBeLessThan(19);
    expect(calculator.multiply(9, 2)).toBeLessThanOrEqual(18);
});

test('returns an error if a non-integer is used', () => {
    expect(calculator.add('a', 5)).toBe('Invalid number');
    expect(calculator.add(5, 'b')).toBe('Invalid number');
    expect(calculator.add('a', '5')).toBe('Invalid number');
    expect(calculator.subtract('a', '5')).toBe('Invalid number');
    expect(calculator.divide('a', '5')).toBe('Invalid number');
    expect(calculator.multiply('a', '5')).toBe('Invalid number');
});