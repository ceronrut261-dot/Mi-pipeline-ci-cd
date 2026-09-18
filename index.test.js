const { sumar } = require('./index');

test('suma 2 + 3 correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
});