import person from './person.js';

export default function personHealth(object) {
  let status;
  switch (true) {
    case object.health > 50:
      status = 'healthy';
      break;
    case (object.health > 15 <= 50):
      status = 'wounded';
      break;
    case object.health < 15:
      status = 'critical';
      break;
    default:
      status = 'Значение не задано';
  }
  return status;
}

personHealth(person);
