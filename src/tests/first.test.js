import personHealth from '../js/function.js';

test('Здоровый', () => {
  const person = {
    name: 'Маг',
    health: 65,
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
