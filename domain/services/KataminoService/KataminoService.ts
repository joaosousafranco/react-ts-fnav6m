import { KataminoBoard } from '../../models/KataminoBoard';
import { Pentamino, PentaminoCell } from '../../models/Pentamino';

const BOARD_WIDTH = 5;
const BOARD_HEIGHT = 13;

const beije = '#e1c699';
const grey = '#ddd';

const initialSeparatorsPosition = 4;

export const buildBoard = () => {
  const pentaminoBoard: KataminoBoard = [];
  for (let x = 0; x < BOARD_WIDTH; x++) {
    if (!pentaminoBoard[x]) {
      pentaminoBoard[x] = [];
    }

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      pentaminoBoard[x][y] = {
        color:
          y === initialSeparatorsPosition ||
          y === BOARD_HEIGHT - initialSeparatorsPosition - 1
            ? grey
            : beije,
      };
    }
  }
  return pentaminoBoard;
};

export const drawPentamino = (
  point: number[],
  pentamino: Pentamino,
  board: KataminoBoard
) => {
  pentamino.cells.forEach((cell) => {
    board[cell.y + point[0]][cell.x + point[1]].color = pentamino.color;
  });
};

export const rotatePentamino = (
  origin: number[],
  pentamino: Pentamino,
  angle: number
): Pentamino => {
  const originX = origin[0];
  const originY = origin[1];
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const newCells = pentamino.cells.map((cell): PentaminoCell => {
    const x = Math.round(cell.x * cos - cell.y * sin) + originX;
    const y = Math.round(cell.y * cos + cell.x * sin) + originY;

    return {
      x,
      y,
    };
  });

  return { cells: newCells, color: pentamino.color };
};
