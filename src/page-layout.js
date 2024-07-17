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
  //Modal for game finish//
  const dialog = createElement('dialog');
  dialog.setAttribute('id', 'game-over');
  document.body.appendChild(dialog);
  //Container for dialog element//
  const dialogDiv = createElement('div');
  addClass(dialogDiv, 'dialog-div');
  dialog.appendChild(dialogDiv);
  //Dialog header container//
  const dialogHeaderContainer = createElement('div');
  addClass(dialogHeaderContainer, 'dialog-header-container');
  dialogDiv.appendChild(dialogHeaderContainer);
  //Header text//
  const dialogHeaderText = createElement('h1');
  addClass(dialogHeaderText, 'dialog-header-text');
  dialogHeaderContainer.appendChild(dialogHeaderText);

  //Dialog para container//
  const dialogParaContainer = createElement('div');
  addClass(dialogParaContainer, 'dialog-para-container');
  dialogDiv.appendChild(dialogParaContainer);
  //Div to contain text in para container//
  const paraTextContainer = createElement('div');
  addClass(paraTextContainer, 'para-text-container');
  dialogParaContainer.appendChild(paraTextContainer);
  //Paragraph element//
  const para = createElement('p');
  para.textContent = 'All ships have been sunk!';
  addClass(para, 'para-text');
  paraTextContainer.appendChild(para);
  //Div container new game button//
  const newGamecontainer = createElement('div');
  addClass(newGamecontainer, 'new-game');
  dialogParaContainer.appendChild(newGamecontainer);
  //New game button//
  const newGameBtn = createElement('button');
  newGameBtn.textContent = 'New Game';
  newGamecontainer.appendChild(newGameBtn);
  //Container for boards & Ship buttons//
  const boardAndShipBtnContainer = createElement('div');
  addClass(boardAndShipBtnContainer, 'board-ship-container');
  appendIfNotExists(
    boardAndShipBtnContainer,
    '.board-ship-container',
    contentContainer
  );
  //Game directions container//
  const instructionsDiv = createElement('div');
  addClass(instructionsDiv, 'instructions-container');
  boardAndShipBtnContainer.appendChild(instructionsDiv);
  //Instructions text//
  const instructionsText = createElement('p');
  instructionsText.innerHTML =
    '<p>Select ship and direction to place ship on board</p> <br><p>Select "Start game" once all five ships have been placed</p><br>';

  instructionsDiv.appendChild(instructionsText);
  //Ships container//
  const shipContainer = createElement('div');
  addClass(shipContainer, 'ship-container');
  // appendIfNotExists(shipContainer, '.ship-container', contentContainer);
  appendIfNotExists(shipContainer, '.ship-container', boardAndShipBtnContainer);
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
  carrierBtn.setAttribute('id', 5);
  shipContainer.appendChild(carrierBtn);

  const battleshipBtn = createElement('button');
  battleshipBtn.textContent = 'Battleship';
  battleshipBtn.setAttribute('id', 4);
  shipContainer.appendChild(battleshipBtn);

  const cruiserBtn = createElement('button');
  cruiserBtn.textContent = 'Cruiser';
  cruiserBtn.setAttribute('id', 3);
  shipContainer.appendChild(cruiserBtn);

  const submarineBtn = createElement('button');
  submarineBtn.textContent = 'Submarine';
  submarineBtn.setAttribute('id', 3);
  shipContainer.appendChild(submarineBtn);

  const destroyerBtn = createElement('button');
  destroyerBtn.textContent = 'Destroyer';
  destroyerBtn.setAttribute('id', 2);
  shipContainer.appendChild(destroyerBtn);
  // Player board//
  const playerBoard = createElement('div');
  addClass(playerBoard, 'player-board-container');
  //
  appendIfNotExists(
    playerBoard,
    '.player-board-container',
    boardAndShipBtnContainer
  );
  //Computer board//
  const computerBoard = createElement('div');
  addClass(computerBoard, 'computer-board-container');
  // Start game button div container//
  const startGameContainer = createElement('div');
  addClass(startGameContainer, 'start-container');
  appendIfNotExists(startGameContainer, '.start-container', contentContainer);
  //Random button//
  const randomBtn = createElement('button');
  randomBtn.textContent = 'Random';
  startGameContainer.appendChild(randomBtn);
  // Start game button//
  const startGameBtn = createElement('button');
  startGameBtn.textContent = 'Start game';
  startGameContainer.appendChild(startGameBtn);
  // Reset button//
  const resetBtn = createElement('button');
  resetBtn.textContent = 'Reset';
  startGameContainer.appendChild(resetBtn);
  // //Function to create player board//
  createDomGameBoard(playerBoard, 'player');
  //Function to create computer board//
  createDomGameBoard(computerBoard, 'computer');

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
    startGameBtn,
    randomBtn,
    resetBtn,
    boardAndShipBtnContainer,
    dialog,
    dialogHeaderText,
    newGameBtn,
    instructionsDiv,
    shipContainer,
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
export function createDomGameBoard(board, owner) {
  const { boardCoordsArr } = createDomCoordsArr();
  let row;
  for (let i = 0; i < 100; i++) {
    row = createElement('div');
    addClass(row, 'row');
    row.setAttribute('id', boardCoordsArr[i]);
    row.setAttribute('data-owner', owner);
    board.appendChild(row);
  }
  return { row };
}
