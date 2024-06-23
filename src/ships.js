export class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
  damageTaken = 0;

  hit() {
    this.damageTaken++;
  }

  isSunk() {
    if (this.damageTaken >= this.length) {
      return true;
    } else {
      return false;
    }
  }
}
