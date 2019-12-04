import personHealth from '../js/function.js';
import person from '../js/person.js';

test('Здоровый', () => {
  const received = personHealth(person);
  const expected = 'healthy';
  expect(received).toBe(expected);
});
