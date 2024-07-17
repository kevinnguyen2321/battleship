import { pageLayout } from './page-layout';
import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';
import { Player } from './player';
import {
  checkForTruthyKeys,
  generateRandomCoords,
  appendIfNotExists,
} from './utility';

export const {
  playerBoard,
  computerBoard,
  carrierBtn,
  horizontalBtn,
  verticalBtn,
  battleshipBtn,
  cruiserBtn,
  submarineBtn,
  destroyerBtn,
  startGameBtn,
  resetBtn,
  randomBtn,
  boardAndShipBtnContainer,
  dialog,
  dialogHeaderText,
  newGameBtn,
  instructionsDiv,
  shipContainer,
} = pageLayout();

//Player ships//
let playerCarrier;
let playerBattleShip;
let playerCruiser;
let playerSubmarine;
let playerDestroyer;

//Direction variable//
let direction = '';

//Array for highlighted boards//
let highlightedBoardsArr = [];

//Variable to track highlighted ship button//
let highlightedButton;

//Create player//
const player = new Player('Player');
//Create computer//
const computer = new Player('Computer');

//Event listeners//
playerBoard.addEventListener('click', (e) => {
  const clickedElement = e.target;
  if (clickedElement.classList.contains('row')) {
    const coords = clickedElement.id.split('-').map(Number); // Convert '0-0' to [0, 0]
    const coordsToString = clickedElement.id.split('-').toString();
    console.log('Playerboard Coordinates:', coords);
    //Displaying ships on DOM//
    if (!clickedElement.classList.contains('clicked')) {
      displayShip(carrierBtn, playerCarrier, coords, direction);
      displayShip(battleshipBtn, playerBattleShip, coords, direction);
      displayShip(cruiserBtn, playerCruiser, coords, direction);
      displayShip(submarineBtn, playerSubmarine, coords, direction);
      displayShip(destroyerBtn, playerDestroyer, coords, direction);
    }
    if (horizontalBtn.classList.contains('highlight')) {
      removeHighlight(horizontalBtn);
    } else if (verticalBtn.classList.contains('highlight')) {
      removeHighlight(verticalBtn);
    }
  }
});

playerBoard.addEventListener('mouseover', (e) => {
  const hoveredElement = e.target;
  removeHoverClass(highlightedBoardsArr);
  // Add the new hover classes
  if (highlightedButton) {
    highlightedBoardsArr = hoverOverDomBoards(
      highlightedButton,
      hoveredElement
    );
  }
});

playerBoard.addEventListener('mouseleave', (e) => {
  removeHoverClass(highlightedBoardsArr);
});

computerBoard.addEventListener('click', (e) => {
  const clickedElement = e.target;
  if (clickedElement.classList.contains('row')) {
    const coords = clickedElement.id.split('-').map(Number); // Convert '0-0' to [0, 0]
    if (
      !clickedElement.classList.contains('hit') &&
      !clickedElement.classList.contains('missed')
    ) {
      console.log('Computer board Coordinates:', coords);
      const [x, y] = coords;
      computer.gameBoard.receiveAttack([x, y]);
      console.log('Computer board below ');
      console.log(computer.gameBoard);
      //Add missed class to missed coords for computer//
      addHitOrMissClass(computer.gameBoard.missedAttacks, 'computer', 'missed');
      //Add hit class to hit coords for computer//
      addHitOrMissClass(computer.gameBoard.hitAttacks, 'computer', 'hit');
      //Generate random attacks for player board//
      let attacked = false;
      let randomCoords;
      const maxAttemps = 100;
      let attempts = 0;
      while (!attacked && attempts < maxAttemps) {
        randomCoords = generateRandomCoords();
        if (boardNotBeenAttacked(randomCoords, 'player')) {
          attacked = boardNotBeenAttacked(randomCoords, 'player');
        }
        attempts++;
      }
      const [a, b] = randomCoords;

      player.gameBoard.receiveAttack([a, b]);
      console.log('Player board below');
      console.log(player.gameBoard);
      //Add missed class for player coords that missed//
      addHitOrMissClass(player.gameBoard.missedAttacks, 'player', 'missed');
      //Add hit class for player coords that were hit//
      addHitOrMissClass(player.gameBoard.hitAttacks, 'player', 'hit');
    }

    //Alert when all of player's ships are sunk or when computer ships are sunk//
    if (player.gameBoard.areAllShipsSunk(player.gameBoard.listOfShips)) {
      dialogHeaderText.textContent = `${computer.name} has won!`;
      dialog.showModal();
    } else if (
      computer.gameBoard.areAllShipsSunk(computer.gameBoard.listOfShips)
    ) {
      dialogHeaderText.textContent = `${player.name} has won!`;
      dialog.showModal();
    }
  }
});

carrierBtn.addEventListener('click', (e) => {
  const playerCarrierBtn = e.target;
  playerCarrier = new Ship('Carrier', 5);
  playerCarrierBtn.classList.toggle('highlight');
  removeHighlight(battleshipBtn);
  removeHighlight(cruiserBtn);
  removeHighlight(submarineBtn);
  removeHighlight(destroyerBtn);
  highlightedButton = carrierBtn;
});

battleshipBtn.addEventListener('click', (e) => {
  const playerBattleshipBtn = e.target;
  playerBattleShip = new Ship('Battleship', 4);
  playerBattleshipBtn.classList.toggle('highlight');
  removeHighlight(carrierBtn);
  removeHighlight(cruiserBtn);
  removeHighlight(submarineBtn);
  removeHighlight(destroyerBtn);
  highlightedButton = battleshipBtn;
});

cruiserBtn.addEventListener('click', (e) => {
  const playerCruiserBtn = e.target;
  playerCruiser = new Ship('Cruiser', 3);
  playerCruiserBtn.classList.toggle('highlight');
  removeHighlight(carrierBtn);
  removeHighlight(battleshipBtn);
  removeHighlight(submarineBtn);
  removeHighlight(destroyerBtn);
  highlightedButton = cruiserBtn;
});

submarineBtn.addEventListener('click', (e) => {
  const playerSubmarineBtn = e.target;
  playerSubmarine = new Ship('Submarine', 3);
  playerSubmarineBtn.classList.toggle('highlight');
  removeHighlight(carrierBtn);
  removeHighlight(battleshipBtn);
  removeHighlight(cruiserBtn);
  removeHighlight(destroyerBtn);
  highlightedButton = submarineBtn;
});

destroyerBtn.addEventListener('click', (e) => {
  const playerDestroyerBtn = e.target;
  playerDestroyer = new Ship('Destroyer', 2);
  playerDestroyerBtn.classList.toggle('highlight');
  removeHighlight(carrierBtn);
  removeHighlight(battleshipBtn);
  removeHighlight(cruiserBtn);
  removeHighlight(submarineBtn);
  highlightedButton = destroyerBtn;
});

horizontalBtn.addEventListener('click', (e) => {
  const horizontalBtn = e.target;
  horizontalBtn.classList.toggle('highlight');
  if (horizontalBtn.classList.contains('highlight')) {
    direction = 'horizontal';
  }
  removeHighlight(verticalBtn);
});

verticalBtn.addEventListener('click', (e) => {
  const verticalBtn = e.target;
  verticalBtn.classList.toggle('highlight');
  if (verticalBtn.classList.contains('highlight')) {
    direction = 'vertical';
  }
  removeHighlight(horizontalBtn);
});

randomBtn.addEventListener('click', (e) => {
  if (horizontalBtn.classList.contains('highlight')) {
    removeHighlight(horizontalBtn);
  } else if (verticalBtn.classList.contains('highlight')) {
    removeHighlight(verticalBtn);
  }
  let placed = false;
  const maxAttempts = 100; // Maximum number of attempts to avoid infinite loop
  let attempts = 0;

  while (!placed && attempts < maxAttempts) {
    let randomCoords = generateRandomCoords();
    let randomDomId = randomCoords.toString().replace(',', '-');
    let randomElement = document.getElementById(randomDomId);
    // Reassign btn, ship, and direction inside the loop
    let { btn, ship, direction } = randomShipBtnAndShipClass();
    if (!randomElement.classList.contains('clicked')) {
      placed = displayShip(btn, ship, randomCoords, direction);
    }
    attempts++;
  }

  if (!placed) {
    console.log('Could not place ship after maximum attempts.');
  }

  const playerListOfShipsLength = Object.keys(
    player.gameBoard.listOfShips
  ).length;
  if (playerListOfShipsLength === 5) {
    randomBtn.disabled = true;
  }
});

startGameBtn.addEventListener('click', (e) => {
  const playerListOfShipsLength = Object.keys(
    player.gameBoard.listOfShips
  ).length;
  //Check that all player ships are placed before displaying computer board//
  if (randomBtn.disabled === true || playerListOfShipsLength === 5) {
    // Randomly place the computer board//
    const computerListOfShipsLength = Object.keys(
      computer.gameBoard.listOfShips
    ).length;
    const maxAttempts = 100;
    let attempts = 0;
    while (computerListOfShipsLength !== 5 && attempts < maxAttempts) {
      computer.gameBoard.randomlyPlaceShips();
      attempts++;
    }
    console.log(computerListOfShipsLength);
    console.log(computer.gameBoard);
    //Append compute board onto DOM
    appendIfNotExists(
      computerBoard,
      '.computer-board-container',
      boardAndShipBtnContainer
    );

    //Remove instructions div container//
    boardAndShipBtnContainer.removeChild(instructionsDiv);
  }
});

resetBtn.addEventListener('click', (e) => {
  resetGame();
});

newGameBtn.addEventListener('click', (e) => {
  resetGame();
  dialog.close();
});

//Helper functions//

//Function to loop over occupied DOM boards and add clicked class//
function addClickToOccupiedBoards(arr) {
  arr.forEach((item) => {
    const boardId = item.replace(',', '-');
    const board = document.getElementById(boardId);
    board.classList.add('clicked');
  });
}

//Function to display ships on DOM//
function displayShip(btn, ship, coords, direction) {
  if (
    btn.classList.contains('highlight') ||
    btn.classList.contains('random-highlight')
  ) {
    const [x, y] = coords;
    if (direction === '') {
      direction = 'horizontal';
    }
    player.gameBoard.placeShip(ship, [x, y], ship.length, direction);
    console.log(player.gameBoard);
    const occupiedDomBoardsArr = checkForTruthyKeys(player.gameBoard.gameBoard);
    addClickToOccupiedBoards(occupiedDomBoardsArr);
    //Check to make sure move is valid before removing highlight class//
    const playerBoardHasShiponCoords = player.gameBoard.gameBoard.get(
      [x, y].toString()
    );
    if (playerBoardHasShiponCoords) {
      btn.disabled = true;
      if (btn.classList.contains('highlight')) {
        btn.classList.remove('highlight');
        // return true;
      } else if (btn.classList.contains('random-highlight')) {
        btn.classList.remove('random-highlight');
        // return true;
      }
      return true;
    } else {
      console.log('Moves not valid');
      return false;
    }
  }
}

//Function to remove highlight class on direction button if other one has been clicked//
function removeHighlight(btn) {
  if (btn.classList.contains('highlight')) {
    btn.classList.remove('highlight');
  }
}

//Function to hover over DOM boards//
function hoverOverDomBoards(button, element) {
  const buttonId = parseInt(button.id);
  const elementIdCoords = element.id.split('-').map(Number);

  let [x, y] = elementIdCoords;
  const rowsIdsArr = [];

  if (button.classList.contains('highlight')) {
    for (let i = 0; i < buttonId; i++) {
      if (direction === '' || direction === 'horizontal') {
        rowsIdsArr.push(`${x}-${y}`);
        y++;
      } else if (direction === 'vertical') {
        rowsIdsArr.push(`${x}-${y}`);
        x++;
      }
    }

    addHoverClass(rowsIdsArr);
  }
  return rowsIdsArr;
}

//Function to add hover class to each board when hovered over(ship's length)//
function addHoverClass(arr) {
  arr.forEach((board) => {
    const row = document.getElementById(board);
    if (row) {
      row.classList.add('hover');
    }
  });
}

//Function to remove hover class
function removeHoverClass(arr) {
  arr.forEach((board) => {
    const row = document.getElementById(board);
    if (row) {
      row.classList.remove('hover');
    }
  });
}

//Function to return random ship button//
function randomShipBtnAndShipClass() {
  const randomIndex = Math.floor(Math.random() * 5);
  const shipBtnArr = [
    carrierBtn,
    battleshipBtn,
    cruiserBtn,
    submarineBtn,
    destroyerBtn,
  ];
  let randomShipBtn = shipBtnArr[randomIndex];
  const playerShipBtnAndClassArr = [];
  switch (randomShipBtn.textContent) {
    case 'Cruiser':
      playerCruiser = new Ship('Cruiser', 3);
      playerShipBtnAndClassArr.push(randomShipBtn, playerCruiser);
      break;
    case 'Carrier':
      playerCarrier = new Ship('Carrier', 5);
      playerShipBtnAndClassArr.push(randomShipBtn, playerCarrier);
      break;
    case 'Battleship':
      playerBattleShip = new Ship('Battleship', 4);
      playerShipBtnAndClassArr.push(randomShipBtn, playerBattleShip);
      break;
    case 'Submarine':
      playerSubmarine = new Ship('Submarine', 3);
      playerShipBtnAndClassArr.push(randomShipBtn, playerSubmarine);
      break;
    case 'Destroyer':
      playerDestroyer = new Ship('Destroyer', 2);
      playerShipBtnAndClassArr.push(randomShipBtn, playerDestroyer);
      break;
  }
  playerShipBtnAndClassArr[0].classList.add('random-highlight');
  const directions = ['horizontal', 'vertical'];
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  return {
    btn: playerShipBtnAndClassArr[0],
    ship: playerShipBtnAndClassArr[1],
    direction: randomDirection,
  };
}

//Function to loop through each missed attacked board and add missed attack class
function addHitOrMissClass(arr, owner, par) {
  arr.forEach((coord) => {
    const coordToId = coord.toString().replace(',', '-');
    // const board = document.getElementById(coordToId);
    const board = document.querySelector(
      `[id='${coordToId}'][data-owner='${owner}']`
    );
    if (board) {
      board.classList.add(par);
    }
  });
}

//Function to check if board has hit or miss class//
function boardNotBeenAttacked(coords, owner) {
  const id = coords.toString().replace(',', '-');
  const board = document.querySelector(`[id='${id}'][data-owner='${owner}']`);
  if (board.classList.contains('hit') || board.classList.contains('missed')) {
    console.log('This board has already been attacked');
    return false;
  } else {
    console.log('This board has not been hit');
    return true;
  }
}

//Function to clear dom boards//
function clearDomBoards(board) {
  if (board.classList.contains('clicked')) {
    board.classList.remove('clicked');
  }
  if (board.classList.contains('hit')) {
    board.classList.remove('hit');
  }
  if (board.classList.contains('missed')) {
    board.classList.remove('missed');
  }
}

//Function to enable any disabled buttons//
function enableBtns() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.disabled === true) {
      button.disabled = false;
    }
    if (button.classList.contains('random-highlight')) {
      button.classList.remove('random-highlight');
    }
  });
}

//Function to reset game//
function resetGame() {
  //Clear both game boards//
  player.gameBoard.resetBoard();
  computer.gameBoard.resetBoard();
  console.log(player.gameBoard);
  console.log(computer.gameBoard);
  //Clear each DOM board if classes are present//
  const playerBoards = document.querySelectorAll('.row');
  playerBoards.forEach((board) => {
    clearDomBoards(board);
  });
  //Renable disabled buttons//
  enableBtns();
  if (boardAndShipBtnContainer.contains(computerBoard)) {
    boardAndShipBtnContainer.removeChild(computerBoard);
  }
  //Remove highlight class if any buttons has class//
  removeHighlight(horizontalBtn);
  removeHighlight(verticalBtn);
  boardAndShipBtnContainer.insertBefore(instructionsDiv, shipContainer);
}
