import { Player } from './player';
import { Gameboard } from './gameboard.mjs';

test('player object has name property', () => {
  const kev = new Player('Kev');
  expect(kev).toHaveProperty('name', 'Kev');
});

test('player object has gameboard', () => {
  const kev = new Player('Kev');
  expect(kev).toHaveProperty('gameBoard', new Gameboard());
});
