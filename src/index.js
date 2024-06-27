import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';

const board = new Gameboard();
const cruiser = new Ship('Cruiser', 2);

console.log(
  board.placeShip(cruiser.name, [2, 1], cruiser.length, 'horizontal')
);


console.log(board.gameBoard.get('2,2'));
