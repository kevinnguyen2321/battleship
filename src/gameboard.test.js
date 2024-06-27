import { Gameboard } from './gameboard.mjs';

test('for coordiantes on Map', () => {
  const board = new Gameboard();
  expect(board.gameBoard.get('0,0')).toBe(null);
});

test('size of Map', () => {
  const board = new Gameboard();
  expect(board.gameBoard.size).toBe(100);
});

test('placement of ship', () => {
  const board = new Gameboard();
  board.placeShip('destroyer', [0, 0], 2, 'horizontal');
  expect(board.gameBoard.get('0,0')).toBe('destroyer');
  expect(board.gameBoard.get('0,1')).toBe('destroyer');
});
