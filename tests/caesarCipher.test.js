const caesarCipher = require('../scripts/caesarCipher');

test(`takes the string 'this is a test', shifts the characters by 1, and returns 'uijt jt b uftu'`, () => {
    expect(caesarCipher('this is a test', 1)).toBe('uijt jt b uftu');
});

test(`return an error message if the shift value is not an integer`, () => {
    expect(caesarCipher('this is a test', '2')).toBe('Error. The provided shift value is not an integer.');
});

test(`return an error message if the shift value is beyond 25`, () => {
    expect(caesarCipher('this is a test', 30)).toBe('Shift value is too high. The maximum accepted value is 25.');
});

test(`takes the string 'this is a test', shifts the characters by 5, and returns 'ymnx nx f yjxy'`, () => {
    expect(caesarCipher('this is a test', 5)).toBe('ymnx nx f yjxy');
});

test(`takes the string 'this is a test', shifts the characters by 25, and returns 'sghr hr z sdrs'`, () => {
    expect(caesarCipher('this is a test', 25)).toBe('sghr hr z sdrs');
});

test(`takes the string 'Javascript is a lot of fun!', shifts the characters by 5, and returns 'Ofafxhwnuy nx f qty tk kzs!'`, () => {
    expect(caesarCipher('Javascript is a lot of fun!', 5)).toBe('Ofafxhwnuy nx f qty tk kzs!');
});

test(`takes the string 'ThIs A sUpEr TeSt!#', shifts the characters by 15, and returns 'IwXh P hJeTg ItHi!#'`, () => {
    expect(caesarCipher('ThIs A sUpEr TeSt!#', 15)).toBe('IwXh P hJeTg ItHi!#');
});