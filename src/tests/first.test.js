import personHealth from '../js/function.js';
//import person from '../js/person.js';

test('Здоровый', () => {
  const person = {
    name: 'Маг',
    health: 63,
  };
  const received = personHealth(person);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('Раненый', () => {
  const person = {
    name: 'Маг',
    health: 45,
  };
  const received = personHealth(person);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('При смерти', () => {
  const person = {
    name: 'Маг',
    health: 10,
  };
  const received = personHealth(person);
  const expected = 'critical';
  expect(received).toBe(expected);
});