import { appendIfNotExists, createElement, addClass } from './utility';

export function pageLayout() {
  //Main container//
  const mainContainer = createElement('div');
  addClass(mainContainer, 'main-container');
  appendIfNotExists(mainContainer, '.main-container', 'body');
  //Header container//
  const headerContainer = createElement('div');
  addClass(headerContainer, 'header-container');
  appendIfNotExists(headerContainer, '.header-container', mainContainer);
  //Header text//
  const headerText = createElement('h1');
  headerText.textContent = 'Battleship';
  addClass(headerText, 'header-text');
  appendIfNotExists(headerText, '.header-text', headerContainer);
  //Content container
  const contentContainer = createElement('div');
  addClass(contentContainer, 'content-container');
  appendIfNotExists(contentContainer, '.content-container', mainContainer);
  //Ships container//
  const shipContainer = createElement('div');
  addClass(shipContainer, 'ship-container');
  appendIfNotExists(shipContainer, '.ship-container', contentContainer);
  //Direction container & buttons//
  const directionContainer = createElement('div');
  addClass(directionContainer, 'direction-container');
  appendIfNotExists(directionContainer, '.direction-container', shipContainer);
  const horizontalBtn = createElement('button');
  //Horizontal button//
  horizontalBtn.textContent = 'Horizontal';
  directionContainer.appendChild(horizontalBtn);
  //Verical button//
  const verticalBtn = createElement('button');
  verticalBtn.textContent = 'Vertical';
  directionContainer.appendChild(verticalBtn);
  // Ship buttons//
  const carrierBtn = createElement('button');
  carrierBtn.textContent = 'Carrier';
  shipContainer.appendChild(carrierBtn);

  const battleshipBtn = createElement('button');
  battleshipBtn.textContent = 'Battleship';
  shipContainer.appendChild(battleshipBtn);

  const cruiserBtn = createElement('button');
  cruiserBtn.textContent = 'Cruiser';
  shipContainer.appendChild(cruiserBtn);

  const submarineBtn = createElement('button');
  submarineBtn.textContent = 'Submarine';
  shipContainer.appendChild(submarineBtn);

  const destroyerBtn = createElement('button');
  destroyerBtn.textContent = 'Destroyer';
  shipContainer.appendChild(destroyerBtn);
  // Player board//
  const playerBoard = createElement('div');
  addClass(playerBoard, 'player-board-container');
  appendIfNotExists(playerBoard, '.player-board-container', contentContainer);
  //Computer board//
  const computerBoard = createElement('div');
  addClass(computerBoard, 'computer-board-container');
  appendIfNotExists(
    computerBoard,
    '.computer-board-container',
    contentContainer
  );
  // //Function to create player board//
  createDomGameBoard(playerBoard);
  //Function to create computer board//
  createDomGameBoard(computerBoard);

  return {
    playerBoard,
    computerBoard,
    carrierBtn,
    horizontalBtn,
    verticalBtn,
    battleshipBtn,
    cruiserBtn,
    submarineBtn,
    destroyerBtn,
  };
}

// Creates coordinates array for DOM row elements//
function createDomCoordsArr() {
  const boardCoordsArr = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // boardCoordsArr.push([i, j]);
      boardCoordsArr.push(`${i}-${j}`);
    }
  }
  return { boardCoordsArr };
}

//Function to create DOM gameboard//
export function createDomGameBoard(board) {
  const { boardCoordsArr } = createDomCoordsArr();
  let row;
  for (let i = 0; i < 100; i++) {
    row = createElement('div');
    addClass(row, 'row');
    row.setAttribute('id', boardCoordsArr[i]);
    board.appendChild(row);
  }
  return { row };
}
