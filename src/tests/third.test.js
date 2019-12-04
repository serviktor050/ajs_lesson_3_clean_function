import personHealth from '../js/function.js';
import person from '../js/person.js';

test('При смерти', () => {
  const received = personHealth(person);
  const expected = 'critical';
  expect(received).toBe(expected);
});
