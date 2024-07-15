import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';

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
  expect(board.gameBoard.get('0,0')).toEqual(['destroyer']);
  expect(board.gameBoard.get('0,1')).toEqual(['destroyer']);
  expect(board.gameBoard.get('5,5')).toEqual(['carrier']);
  expect(board.gameBoard.get('5,6')).toEqual(['carrier']);
  expect(board.gameBoard.get('5,7')).toEqual(['carrier']);
  expect(board.gameBoard.get('5,8')).toEqual(['carrier']);
  expect(board.gameBoard.get('5,9')).toEqual(['carrier']);
});

test('placement of ship vertically', () => {
  const boards = new Gameboard();
  boards.placeShip('submarine', [0, 0], 3, 'vertical');
  boards.placeShip('battleship', [1, 2], 4, 'vertical');
  expect(boards.gameBoard.get('0,0')).toEqual(['submarine']);
  expect(boards.gameBoard.get('1,0')).toEqual(['submarine']);
  expect(boards.gameBoard.get('2,0')).toEqual(['submarine']);
  expect(boards.gameBoard.get('1,2')).toEqual(['battleship']);
  expect(boards.gameBoard.get('2,2')).toEqual(['battleship']);
  expect(boards.gameBoard.get('3,2')).toEqual(['battleship']);
  expect(boards.gameBoard.get('4,2')).toEqual(['battleship']);
});
//Testing for any overlap of ships on board//
test('for any overlap of ships on board', () => {
  const boards = new Gameboard();
  //Testing overlap for horizonal placements//
  boards.placeShip('submarine', [0, 0], 3, 'horizontal');
  boards.placeShip('battleship', [0, 0], 4, 'horizontal');
  expect(boards.gameBoard.get('0,0')).toEqual(['submarine']);
  //Testing overlap for vertical placements//
  boards.placeShip('submarine', [5, 1], 3, 'vertical');
  boards.placeShip('destroyer', [5, 1], 4, 'vertical');
  expect(boards.gameBoard.get('5,1')).toEqual(['submarine']);
});
//Testing any out of bounds placements//
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
//Testing receiveAttack functions//
test('receive attack function on ships', () => {
  const board = new Gameboard();
  const cruiser = new Ship('Cruiser', 3);
  board.placeShip(cruiser, [0, 0], cruiser.length, 'vertical');
  board.receiveAttack([0, 0]);
  board.receiveAttack([1, 0]);
  board.receiveAttack([2, 0]);

  const expectedShipState = {
    name: 'Cruiser',
    length: 3,
    damageTaken: 3, // After being hit once
  };

  expect(board.gameBoard.get('0,0')).toEqual([
    expect.objectContaining(expectedShipState),
    'Hit',
  ]);

  expect(cruiser.damageTaken).toBe(3);

  board.receiveAttack([5, 6]);
  expect(board.gameBoard.get('5,6')).toEqual(['Miss']);
});
// Testing for tracking missed attacks//
test('tracking of missed attacks', () => {
  const board = new Gameboard();
  const submarine = new Ship('Submarine', 3);
  board.placeShip(submarine, [2, 3], submarine.length, 'horizontal');
  board.receiveAttack([0, 0]);
  board.receiveAttack([0, 1]);
  board.receiveAttack([0, 4]);

  const expectedArray = ['0,0', '0,1', '0,4'];

  expect(board.missedAttacks).toEqual(expectedArray);
});
//Test for all ships to be sunk//
test('whether all ships have been sunk', () => {
  const board = new Gameboard();
  const carrier = new Ship('Carrier', 5);
  const cruiser = new Ship('Cruiser', 3);
  const submarine = new Ship('Submarine', 3);
  const destroyer = new Ship('Destroyer', 2);
  const battleship = new Ship('Battleship', 4);

  board.placeShip(battleship, [0, 0], battleship.length, 'vertical');
  board.placeShip(carrier, [2, 3], carrier.length, 'horizontal');
  board.placeShip(cruiser, [5, 4], cruiser.length, 'horizontal');
  board.placeShip(submarine, [7, 3], submarine.length, 'vertical');
  board.placeShip(destroyer, [8, 8], destroyer.length, 'horizontal');

  const expectedList = {
    Battleship: battleship,
    Carrier: carrier,
    Cruiser: cruiser,
    Submarine: submarine,
    Destroyer: destroyer,
  };
  //Checking if list of ships initializes..
  expect(board.listOfShips).toEqual(expect.objectContaining(expectedList));
  //Battlship attacked//
  board.receiveAttack([0, 0]);
  board.receiveAttack([1, 0]);
  board.receiveAttack([2, 0]);
  board.receiveAttack([3, 0]);
  //Carrier attacked//
  board.receiveAttack([2, 3]);
  board.receiveAttack([2, 4]);
  board.receiveAttack([2, 5]);
  board.receiveAttack([2, 6]);
  board.receiveAttack([2, 7]);
  //Cruiser attacked//
  board.receiveAttack([5, 4]);
  board.receiveAttack([5, 5]);
  board.receiveAttack([5, 6]);
  //Submarine attacked//
  board.receiveAttack([7, 3]);
  board.receiveAttack([8, 3]);
  board.receiveAttack([9, 3]);
  //Destroyer attacked//
  board.receiveAttack([8, 8]);
  board.receiveAttack([8, 9]);

  expect(board.areAllShipsSunk(expectedList)).toEqual(true);
});

// Test for only one type of ship to be placed//
test('for multiple placement of same ship', () => {
  const board = new Gameboard();
  const carrier = new Ship('Carrier', 5);
  const cruiser = new Ship('Cruiser', 3);
  const submarine = new Ship('Submarine', 3);
  const destroyer = new Ship('Destroyer', 2);
  const battleship = new Ship('Battleship', 4);

  const battleshipTwo = new Ship('Battleship', 4);

  const expectedShipState = {
    name: 'Battleship',
    length: 4,
    damageTaken: 0,
  };

  const expectedShipStateTwo = {
    name: 'Battleship',
    length: 4,
    damageTaken: 0,
  };

  board.placeShip(battleship, [0, 0], battleship.length, 'vertical');

  board.placeShip(battleshipTwo, [5, 2], battleshipTwo.length, 'horizontal');

  expect(board.gameBoard.get('0,0')).toEqual([
    expect.objectContaining(expectedShipState),
  ]);

  expect(board.gameBoard.get('5,2')).toBeNull();
});
