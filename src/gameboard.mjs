export class Gameboard {
  // Method to initialize game board//
  createBoard() {
    const rows = new Map();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const coordinates = `${i},${j}`;

        rows.set(coordinates, null);
      }
    }

    return rows;
  }
  //Gameboard//
  gameBoard = this.createBoard();
  //Method to place ships on board//
  placeShip(shipType, [x, y], length, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        const coordinates = `${x},${y + 1}`;
        this.gameBoard.set(coordinates, shipType);
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        const coordinates = `${x + 1}, ${y}`;
        this.gameBoard.set(coordinates, shipType);
      }
    }
  }
}
