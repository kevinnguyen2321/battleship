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
      //Placing ships horizontally//
      if (direction === 'horizontal') {
        const placementArr = [];
        let placementToIntegerArr;
        for (let i = 0; i < length; i++) {
          const coordinates = `${x},${yValue}`;
          yValue++;
          placementArr.push(coordinates);
          placementToIntegerArr = placementArr.map((coord) => {
            return coord.split(',').map(Number);
          });
        }
        const allHorizCoordsInbound = this.isAllCoordsInbound(
          placementToIntegerArr
        );
        const allHorizCoordsEmpty = this.isAllCoordsEmpty(placementArr);
        if (allHorizCoordsEmpty && allHorizCoordsInbound) {
          placementArr.forEach((coord) => {
            this.gameBoard.set(coord, shipType);
          });
        }

        //Placing ships vertically//
      } else if (direction === 'vertical') {
        const placementArr = [];
        let placementToIntArr;
        for (let i = 0; i < length; i++) {
          const coordinates = `${xValue},${y}`;
          xValue++;
          placementArr.push(coordinates);
          placementToIntArr = placementArr.map((coord) => {
            return coord.split(',').map(Number);
          });
        }
        const allVertCoordsInbound = this.isAllCoordsInbound(placementToIntArr);
        const allVertCoordsEmpty = this.isAllCoordsEmpty(placementArr);
        console.log(allVertCoordsEmpty);
        if (allVertCoordsInbound && allVertCoordsEmpty) {
          placementArr.forEach((coord) => {
            this.gameBoard.set(coord, shipType);
          });
        }
      }
    }
  }
}
