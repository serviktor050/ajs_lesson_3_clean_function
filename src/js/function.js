import person from './person.js';

export default function personHealth(person) {
  let status;
  switch (true) {
    case person.health > 50:
      status = 'healthy';
      break;
    case (person.health > 15 <= 50):
      status = 'wounded';
      break;
    case person.health < 15:
      status = 'critical';
      break;
  }
  return status;
}
