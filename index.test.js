const { sumar, multiplicar } = require('./index');

test('suma 2 + 3 correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('multiplica 4 * 5 correctamente', () => {
    expect(multiplicar(4, 5)).toBe(20);
});