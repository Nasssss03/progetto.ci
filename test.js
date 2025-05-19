// tests/index.test.js
const somma = require('../index');

test('somma corretta', () => {
  expect(somma(2, 3)).toBe(5);
});

test('somma fallita', () => {
  expect(somma(1, 2)).toBe(10); // intenzionalmente fallito
});
