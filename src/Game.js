export default class Game {
  score = 0;
  lines = 0;

  board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  coords = {
    x: 0,
    y: 0
  }

  activePiece = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  moveDown() {
    this.coords.y += 1;

    if (this.isPieceOutOfBoard()) {
      this.coords.y -= 1;
      this.lockPiece()
    }
  };

  moveUp() {
    this.coords.y -= 1;

    if (this.isPieceOutOfBoard()) {
      this.coords.y += 1;
    }
  }

  isPieceOutOfBoard() {
    for (let y = 0; y < this.activePiece.length; y++) {
      for (let x = 0; x < this.activePiece[y].length; x++) {
        if (
            this.activePiece[y][x] && (
              (this.board[this.coords.y + y] === undefined || this.board[this.coords.y + y][this.coords.x + x] === undefined)
           || (this.board[this.coords.y + y][this.coords.x + x])
            )
          ) {
            console.log('out of peace');
          return true;
        }
      }
    }

    return false;
  }

  lockPiece() {
    for (let y = 0; y < this.activePiece.length; y++) {
      for (let x = 0; x < this.activePiece[y].length; x++) {
        if(this.activePiece[y][x]) {
          this.board[this.coords.y + y][this.coords.x + x] = this.activePiece[y][x]
        }
        
      }
    }
  }
};
