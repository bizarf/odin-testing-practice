const caesarCipher = (string, shift) => {
    if (typeof shift != 'number') return 'Error. The provided shift value is not an integer.'
    if (shift > 25) return 'Shift value is too high. The maximum accepted value is 25.'

    // split up the string, and then loop through each letter
    const letters = string.split('');
    for (let i = 0; i < letters.length; i++) {
        // this gets the unicode decimal value of the letter
        const unicode = letters[i].charCodeAt();

        let remainingShift

        // if between A-Y then shift the unicode
        if (unicode >= 65 && unicode < 90) {
            // makes sure letters wrap from A-Y
            if ((unicode + shift) > 90) {
                remainingShift = (unicode + shift) - 90;
                letters[i] = String.fromCharCode(64 + remainingShift);
            } else {
                letters[i] = String.fromCharCode(unicode + shift);
            }
        };

        // if between a-y then shift the unicode
        if (unicode >= 97 && unicode < 122) {
            if ((unicode + shift) > 122) {
                remainingShift = (unicode + shift) - 122;
                letters[i] = String.fromCharCode(96 + remainingShift);
            } else {
                letters[i] = String.fromCharCode(unicode + shift)
            }
        }

        // if unicode is Z then set the letter to A
        if (unicode === 90) {
            letters[i] = String.fromCharCode(65);
        };

        // if unicode is z then set the letter to a
        if (unicode === 122) {
            letters[i] = String.fromCharCode(97);
        }
    };
    return letters.join('')
};

module.exports = caesarCipher;