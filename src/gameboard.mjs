import { Ship } from './ships.js';
import { generateRandomCoords } from './utility.js';

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
    if (
      this.isInbound([x, y]) &&
      this.noShipDuplicates(shipType.name, shipType.length)
    ) {
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

  //Method to reset gameboard//
  resetBoard() {
    this.gameBoard = this.createBoard();
    this.missedAttacks = [];
    this.hitAttacks = [];
    this.listOfShips = {};
  }

  //Keeping track of missed attacks//
  missedAttacks = [];

  //Keeping track of hit ships coords//
  hitAttacks = [];

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
    if (value[0] instanceof Ship) {
      value[0].hit();
      this.hitAttacks.push(coordinates);
    } else {
      console.error('Error: Value at coordinates is not a Ship instance');
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
  //Method to check for any duplicates of ship types//
  noShipDuplicates(shipType, shipLength) {
    const gameboardValues = this.gameBoard.values();
    let count = 0;
    for (let key of gameboardValues) {
      if (key && key[0].name === shipType) {
        count++;
      }
    }
    return count < shipLength;
  }
  //Method to randomly place ships on board//
  randomlyPlaceShips(ship, coords, length, direction) {
    const randomShip = generateRandomShip();

    this.placeShip(
      randomShip,
      generateRandomCoords(),
      randomShip.length,
      generateRandomDirection()
    );
  }
}

//Helper functions//
function generateRandomShip() {
  const computerCarrier = new Ship('Carrier', 5);
  const computerBattleship = new Ship('Battleship', 4);
  const computerCruiser = new Ship('Cruiser', 3);
  const computerSubmarine = new Ship('Submarine', 3);
  const computerDestroyer = new Ship('Destroyer', 2);
  //Ship array//
  const computerShipArr = [
    computerCarrier,
    computerBattleship,
    computerCruiser,
    computerSubmarine,
    computerDestroyer,
  ];
  const randomIndex = Math.floor(Math.random() * 5);
  return computerShipArr[randomIndex];
}

function generateRandomDirection() {
  const directionArr = ['horizontal', 'vertical'];
  const randomIndex = Math.floor(Math.random() * 2);
  return directionArr[randomIndex];
}
