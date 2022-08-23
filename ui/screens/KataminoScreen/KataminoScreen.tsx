import * as React from 'react';
import cx from 'classnames';
import './KataminoScreen.style';
import { useWindowSize } from '../../hooks/useWindowSize';

const BOARD_WIDTH = 5;
const BOARD_HEIGHT = 13;

type Cell = {
  color: string;
};

type PentaminoCell = {
  x: number;
  y: number;
};

type Pentamino = {
  cells: PentaminoCell[];
  color: string;
};

const pentaminos: Pentamino[] = [
  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 1, y: 3 },
    ],
    color: 'orange',
  },
  {
    cells: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 0, y: 1 },
    ],
    color: '#964B00',
  },
  {
    cells: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    color: 'purple',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
    ],
    color: '#00008B',
  },
  {
    cells: [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    color: 'pink',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    color: 'yellow',
  },
  {
    cells: [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    color: '#89CFF0',
  },

  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    color: 'pink',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
    color: 'green',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
    color: '#89CFF0',
  },
  {
    cells: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
    color: 'yellow',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    color: 'purple',
  },

  {
    cells: [{ x: 0, y: 0 }],
    color: 'red',
  },
  {
    cells: [{ x: 0, y: 0 }],
    color: 'red',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ],
    color: 'orange',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ],
    color: 'orange',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
    color: '#964B00',
  },
  {
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
    color: 'orange',
  },
];

const buildBoard = () => {
  const pentaminoBoard: Cell[][] = [];
  for (let x = 0; x < BOARD_WIDTH; x++) {
    if (!pentaminoBoard[x]) {
      pentaminoBoard[x] = [];
    }

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      pentaminoBoard[x][y] = {
        color: y === 3 || y === BOARD_HEIGHT - 4 ? 'grey' : '#e1c699',
      };
    }
  }
  return pentaminoBoard;
};

const drawPentamino = (
  point: number[],
  pentamino: Pentamino,
  board: Cell[][]
) => {
  pentamino.cells.forEach((cell) => {
    board[cell.y + point[0]][cell.x + point[1]].color = pentamino.color;
  });
};

export const KataminoScreen = () => {
  const [currentPentamino, setCurrentPentamino] = React.useState(0);
  const [board, setBoard] = React.useState(buildBoard());

  const size = useWindowSize();

  React.useEffect(() => {
    if (currentPentamino < pentaminos.length) {
      setTimeout(() => {
        const newBoard = buildBoard();
        drawPentamino([0, 0], pentaminos[currentPentamino], newBoard);
        setCurrentPentamino(currentPentamino + 1);
        setBoard(newBoard);
      }, 1000);
    }
  }, [currentPentamino]);

  return (
    <div className={cx('katamino')}>
      <div>{size}</div>
      <div className={cx('board')}>
        {board.map((x, index) => (
          <div key={index} className={cx('row')}>
            {x.map((cell, index) => (
              <div
                key={index}
                className={cx('cell')}
                style={{ backgroundColor: cell.color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
