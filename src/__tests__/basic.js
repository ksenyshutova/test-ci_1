import calculateLife from "../calculateLife";

test.each([
    ['Маг', 90, 'healthy'],
    ['Колдун', 20, 'wounded'],
    ['Ведьмак', 13, 'critical'],
])('testing life of object',(_, health, expected) => {
    const result = calculateLife(health);
    expect(result).toBe(expected);
});