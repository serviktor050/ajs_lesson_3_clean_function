import personHealth from '../js/function.js';
import person from '../js/person.js';

test('Раненый', () => {
  const received = personHealth(person);
  const expected = 'wounded';
  expect(received).toBe(expected);
});
