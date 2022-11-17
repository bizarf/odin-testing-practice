const calculator = (() => {
    const add = (a, b) => {
        if (valueCheck(a, b) === false) {
            return 'Invalid number';
        }
        return a + b;
    }
    const subtract = (a, b) => {
        if (valueCheck(a, b) === false) {
            return 'Invalid number';
        }
        return a - b;
    }
    const divide = (a, b) => {
        if (valueCheck(a, b) === false) {
            return 'Invalid number';
        }
        return a / b;
    }
    const multiply = (a, b) => {
        if (valueCheck(a, b) === false) {
            return 'Invalid number';
        }
        return a * b
    }
    const valueCheck = (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') return false;
    }
    return {
        add,
        subtract,
        divide,
        multiply,
    }
})()

module.exports = calculator