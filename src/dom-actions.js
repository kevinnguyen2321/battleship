import { pageLayout } from './page-layout';
import { Gameboard } from './gameboard.mjs';
import { Ship } from './ships';
import { Player } from './player';
import { checkForTruthyKeys } from './utility';

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
} = pageLayout();

//Player ships//
let playerCarrier;
let playerBattleShip;
let playerCruiser;
let playerSubmarine;
let playerDestroyer;

//Direction variable//
let direction = '';

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
    // const playerGameboardHasShip =
    //   player.gameBoard.gameBoard.get(coordsToString);

    if (!clickedElement.classList.contains('clicked')) {
      displayShip(carrierBtn, playerCarrier, coords);
      displayShip(battleshipBtn, playerBattleShip, coords);
      displayShip(cruiserBtn, playerCruiser, coords);
      displayShip(submarineBtn, playerSubmarine, coords);
      displayShip(destroyerBtn, playerDestroyer, coords);
    }
  }
});

computerBoard.addEventListener('click', (e) => {
  const clickedElement = e.target;
  if (clickedElement.classList.contains('row')) {
    const coords = clickedElement.id.split('-').map(Number); // Convert '0-0' to [0, 0]
    console.log('Computer board Coordinates:', coords);
  }
});

carrierBtn.addEventListener('click', (e) => {
  const playerCarrierBtn = e.target;
  playerCarrier = new Ship('Carrier', 5);
  playerCarrierBtn.classList.toggle('highlight');
});

battleshipBtn.addEventListener('click', (e) => {
  const playerBattleshipBtn = e.target;
  playerBattleShip = new Ship('Battleship', 4);
  playerBattleshipBtn.classList.toggle('highlight');
});

cruiserBtn.addEventListener('click', (e) => {
  const playerCruiserBtn = e.target;
  playerCruiser = new Ship('Cruiser', 3);
  playerCruiserBtn.classList.toggle('highlight');
});

submarineBtn.addEventListener('click', (e) => {
  const playerSubmarineBtn = e.target;
  playerSubmarine = new Ship('Submarine', 3);
  playerSubmarineBtn.classList.toggle('highlight');
});

destroyerBtn.addEventListener('click', (e) => {
  const playerDestroyerBtn = e.target;
  playerDestroyer = new Ship('Destroyer', 2);
  playerDestroyerBtn.classList.toggle('highlight');
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

//Function to loop over occupied DOM boards and add clicked class//
function addClickToOccupiedBoards(arr) {
  arr.forEach((item) => {
    const boardId = item.replace(',', '-');
    const board = document.getElementById(boardId);
    board.classList.add('clicked');
  });
}

//Function to display ships on DOM//
function displayShip(btn, ship, coords) {
  if (btn.classList.contains('highlight')) {
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
      btn.classList.remove('highlight');
    }
  }
}

//Function to remove highlight class on direction button if other one has been clicked//
function removeHighlight(btn) {
  if (btn.classList.contains('highlight')) {
    btn.classList.remove('highlight');
  }
}
