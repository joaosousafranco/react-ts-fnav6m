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
  origin: number[],
  pentamino: Pentamino,
  board: KataminoBoard
) => {
  const [originX, originY] = origin;

  pentamino.cells.forEach((cell) => {
    const boardCell = board[cell.y + originX][cell.x + originY];
    if (boardCell) {
      boardCell.color = pentamino.color;
    }
  });
};

export const rotatePentamino = (
  pentamino: Pentamino,
  angle: number
): Pentamino => {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const newCells = pentamino.cells.map((cell): PentaminoCell => {
    const x = Math.round(cell.x * cos - cell.y * sin) + pentamino.cells[0].x;
    const y = Math.round(cell.y * cos + cell.x * sin) + pentamino.cells[0].y;

    return {
      x,
      y,
    };
  });

  return { cells: newCells, color: pentamino.color };
};
