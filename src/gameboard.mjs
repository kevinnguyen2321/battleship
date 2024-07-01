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
  //Method to check if coordinates is in bound//
  isInbound([x, y]) {
    if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
      return true;
    } else {
      return false;
    }
  }
  //Method to check if all coordinates are inbound before placing ships//
  isAllCoordsInbound(arr) {
    return arr.every((coord) => {
      const [x, y] = coord;
      return this.isInbound([x, y]);
    });
  }

  //Method to check if all coordinates are empty before placing ships//
  isAllCoordsEmpty(arr) {
    return arr.every((coord) => {
      return !this.gameBoard.get(coord);
    });
  }
  //Method to place ships on board//
  placeShip(shipType, [x, y], length, direction) {
    let xValue = x;
    let yValue = y;
    if (this.isInbound([x, y])) {
      const placementArr = [];
      let placementToIntegerArr;
      let coordinates;
      for (let i = 0; i < length; i++) {
        if (direction === 'horizontal') {
          coordinates = `${x},${yValue}`;
          yValue++;
        } else if (direction === 'vertical') {
          coordinates = `${xValue},${y}`;
          xValue++;
        }
        placementArr.push(coordinates);
        placementToIntegerArr = placementArr.map((coord) => {
          return coord.split(',').map(Number);
        });
      }
      const allCoordsInbound = this.isAllCoordsInbound(placementToIntegerArr);
      const allCoordsEmpty = this.isAllCoordsEmpty(placementArr);
      if (allCoordsInbound && allCoordsEmpty) {
        placementArr.forEach((coord) => {
          this.gameBoard.set(coord, [shipType]);
        });
        this.listOfShips[shipType.name] = shipType;
      }
    }
  }

  //Keeping track of missed attacks//
  missedAttacks = [];

  //List of all ships on board//
  listOfShips = {};

  //Method to take attacks//
  receiveAttack([x, y]) {
    const coordinates = `${x},${y}`;
    let value = this.gameBoard.get(coordinates);
    if (value && !value.includes('Hit')) {
      value.push('Hit');
      this.gameBoard.set(coordinates, value);
      this.sendHitToShip(coordinates);
      const allShipsSunk = this.areAllShipsSunk(this.listOfShips);
      //If all ships are sunk report that all ships sank//
      if (allShipsSunk) {
        console.log('All ships are sunk!');
      }
    } else {
      this.gameBoard.set(coordinates, ['Miss']);
      this.missedAttacks.push(coordinates);
    }
  }

  //Method to send hit function to ship//
  sendHitToShip(coordinates) {
    let value = this.gameBoard.get(coordinates);
    const hitShips = value.find((item) => item === 'Hit');
    if (hitShips) {
      value[0].hit();
    }
  }

  //Check if all ships are sunk//
  areAllShipsSunk(obj) {
    const sunkArr = [];
    for (const ship in obj) {
      const isSunk = obj[ship].isSunk();
      if (isSunk === true) {
        sunkArr.push(ship);
      }
    }
    if (sunkArr.length === 5) {
      return true;
    } else {
      return false;
    }
  }
}
