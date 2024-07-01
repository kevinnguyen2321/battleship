import { Gameboard } from './gameboard.mjs';

export class Player {
  constructor(name) {
    this.name = name;
  }
  gameBoard = new Gameboard();
}
