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
  // //Function to create rows for player & computer boards//
  const createPlayerboard = (function (board) {
    for (let i = 0; i < 100; i++) {
      const row = createElement('div');
      addClass(row, 'row');
      board.appendChild(row);
    }
  })(playerBoard);
  //Function to create computer board//
  const createComputerBoard = (function (board) {
    for (let i = 0; i < 100; i++) {
      const row = createElement('div');
      addClass(row, 'row');
      board.appendChild(row);
    }
  })(computerBoard);
}
