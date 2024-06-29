import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';

const board = new Gameboard();
const cruiser = new Ship('Cruiser', 3);
const carrier = new Ship('Carrier', 5);
const destroyer = new Ship('Destroyer', 2);

// console.log(
//   // board.placeShip(cruiser.name, [2, 1], cruiser.length, 'horizontal')
// );

// console.log(
//   board.placeShip(carrier.name, [2, 2], carrier.length, 'horizontal')
// );

board.placeShip(destroyer.name, [9, 9], destroyer.length, 'vertical');

console.log(board.gameBoard);
