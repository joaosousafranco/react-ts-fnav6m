import * as React from 'react';

const BOARD_WIDTH = 5;
const BOARD_HEIGHT = 13;

const CELL_WIDTH = 100;
const CELL_HEIGHT = 100;

type Cell = {
  occupied: boolean;
};

const board: Cell[][] = [];

for (let x = 0; x < BOARD_WIDTH; x++) {
  for (let y = 0; y < BOARD_HEIGHT; y++) {
    board[x][y] = { occupied: false };
  }
}

export const KataminoScreen = () => {
  return <div>Katamino</div>;
};
