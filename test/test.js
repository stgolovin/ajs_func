import getHP from '../main';

// test('basic test', () => {
//     const expected = 'healthy';
//     const recieved = getHP({name: "Маг", health: 90})

//     expect(recieved).toBe(expected)
// });

test.each([
  ['мечник', 10, 'critical'],
  ['маг', 100, 'healthy'],
  ['лучник', 40, 'wounded'],
])('advanced test for %s health:%i status: %s', (name, health, status) => {
  const result = getHP(health);

  expect(result).toBe(status);
});
