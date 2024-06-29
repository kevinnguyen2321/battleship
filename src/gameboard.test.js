import { Gameboard } from './gameboard.mjs';

test('for coordinantes on Map', () => {
  const board = new Gameboard();
  expect(board.gameBoard.get('0,0')).toBe(null);
});

test('size of Map', () => {
  const board = new Gameboard();
  expect(board.gameBoard.size).toBe(100);
});
//Testing placement of ships//
test('placement of ship horizontally', () => {
  const board = new Gameboard();
  board.placeShip('destroyer', [0, 0], 2, 'horizontal');
  board.placeShip('carrier', [5, 5], 5, 'horizontal');
  expect(board.gameBoard.get('0,0')).toBe('destroyer');
  expect(board.gameBoard.get('0,1')).toBe('destroyer');
  expect(board.gameBoard.get('5,5')).toBe('carrier');
  expect(board.gameBoard.get('5,6')).toBe('carrier');
  expect(board.gameBoard.get('5,7')).toBe('carrier');
  expect(board.gameBoard.get('5,8')).toBe('carrier');
  expect(board.gameBoard.get('5,9')).toBe('carrier');
});

test('placement of ship vertically', () => {
  const boards = new Gameboard();
  boards.placeShip('submarine', [0, 0], 3, 'vertical');
  boards.placeShip('battleship', [1, 2], 4, 'vertical');
  expect(boards.gameBoard.get('0,0')).toBe('submarine');
  expect(boards.gameBoard.get('1,0')).toBe('submarine');
  expect(boards.gameBoard.get('2,0')).toBe('submarine');
  expect(boards.gameBoard.get('1,2')).toBe('battleship');
  expect(boards.gameBoard.get('2,2')).toBe('battleship');
  expect(boards.gameBoard.get('3,2')).toBe('battleship');
  expect(boards.gameBoard.get('4,2')).toBe('battleship');
});

test('for any overlap of ships on board', () => {
  const boards = new Gameboard();
  //Testing overlap for horizonal placements//
  boards.placeShip('submarine', [0, 0], 3, 'horizontal');
  boards.placeShip('battleship', [0, 0], 4, 'horizontal');
  expect(boards.gameBoard.get('0,0')).toBe('submarine');
  //Testing overlap for vertical placements//
  boards.placeShip('submarine', [5, 1], 3, 'vertical');
  boards.placeShip('destroyer', [5, 1], 4, 'vertical');
  expect(boards.gameBoard.get('5,1')).toBe('submarine');
});

test('for any out of bound placements', () => {
  const board = new Gameboard();
  board.placeShip('submarine', [0, 11], 3, 'vertical');
  expect(board.gameBoard.get('0,11')).not.toBe('submarine');
  expect(board.gameBoard.size).toBe(100);

  board.placeShip('destroyer', [9, 9], 2, 'horizontal');
  expect(board.gameBoard.get('9,9')).toBeNull();
  expect(board.gameBoard.size).toBe(100);

  board.placeShip('cruiser', [9, 1], 3, 'vertical');
  expect(board.gameBoard.get('9,1')).toBeNull();
  expect(board.gameBoard.size).toBe(100);
});
