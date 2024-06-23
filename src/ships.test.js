import { Ship } from './ships';

test('ship class to have properties', () => {
  const battleShip = new Ship('Battleship', 4);
  expect(battleShip).toHaveProperty('name');
});

test('ship class to have properties', () => {
  const cruiser = new Ship('Cruiser', 3);
  expect(cruiser).toHaveProperty('length', 3);
});

test('ship class to have properties', () => {
  const cruiser = new Ship('Cruiser', 3);
  expect(cruiser).toHaveProperty('name', 'Cruiser');
});

test('ship class to have properties', () => {
  const battleShip = new Ship('Battleship', 4);
  expect(battleShip).toHaveProperty('damageTaken');
});

test('damageTaken to incremenet after hit function called', () => {
  const battleShip = new Ship();
  battleShip.hit();
  battleShip.hit();
  expect(battleShip.damageTaken).toBe(2);
});

test('isSunk function to work correctly', () => {
  const destroyer = new Ship('Destroyer', 2);
  destroyer.hit();
  destroyer.hit();

  expect(destroyer.isSunk()).toBe(true);
});
