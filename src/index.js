import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';

const board = new Gameboard();
const cruiser = new Ship('Cruiser', 3);
const carrier = new Ship('Carrier', 5);
const destroyer = new Ship('Destroyer', 2);
const submarine = new Ship('Submarine', 3);
const battleship = new Ship('Battleship', 4);

board.placeShip(cruiser, [5, 5], cruiser.length, 'horizontal');
board.receiveAttack([5, 5]);
board.receiveAttack([5, 6]);
board.receiveAttack([5, 7]);

board.placeShip(carrier, [2, 2], carrier.length, 'horizontal');
board.receiveAttack([2, 2]);
board.receiveAttack([2, 3]);
board.receiveAttack([2, 4]);
board.receiveAttack([2, 5]);
board.receiveAttack([2, 6]);

board.placeShip(destroyer, [0, 3], destroyer.length, 'vertical');
board.receiveAttack([0, 3]);
board.receiveAttack([1, 3]);
board.receiveAttack([2, 3]);

console.log(board.gameBoard);

board.placeShip(submarine, [8, 3], submarine.length, 'horizontal');
board.receiveAttack([8, 3]);
board.receiveAttack([8, 4]);
board.receiveAttack([8, 5]);

board.placeShip(battleship, [4, 3], battleship.length, 'vertical');
board.receiveAttack([4, 3]);
board.receiveAttack([5, 3]);
board.receiveAttack([6, 3]);
board.receiveAttack([7, 3]);

// console.log(board.areAllShipsSunk(board.listOfShips));

