//Function to append if the element does not already exists//
export function appendIfNotExists(element, selector, parent) {
  if (!document.querySelector(selector)) {
    if (parent === 'body') {
      document.body.appendChild(element);
    } else {
      parent.appendChild(element);
    }
  }
}

//Function to create element//
export function createElement(element) {
  return document.createElement(element);
}
// Function to add class/
export function addClass(element, selector) {
  element.classList.add(selector);
}

//Function to iterate keys of gameBoard//
export function checkForTruthyKeys(map) {
  const occupiedDomBoards = [];
  for (let [key, value] of map.entries()) {
    if (value) {
      occupiedDomBoards.push(key);
    }
  }
  return occupiedDomBoards;
}
