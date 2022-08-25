import * as React from 'react';
import cx from 'classnames';
import './KataminoScreen.style';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Pentamino } from '../../../domain/models/Pentamino';
import { pentaminos } from '../../../domain/services/KataminoService/pentaminos';
import { KataminoBoard } from '../../../domain/models/KataminoBoard';
import {
  buildBoard,
  drawPentamino,
  rotatePentamino,
} from '../../../domain/services/KataminoService/KataminoService';

export const KataminoScreen = () => {
  const [currentPentamino, setCurrentPentamino] = React.useState(0);
  const [board, setBoard] = React.useState(buildBoard());

  const size = useWindowSize();

  // React.useEffect(() => {
  //   if (currentPentamino < pentaminos.length) {
  //     setTimeout(() => {
  //       const newBoard = buildBoard();
  //       drawPentamino([0, 0], pentaminos[currentPentamino], newBoard);
  //       setCurrentPentamino(currentPentamino + 1);
  //       setBoard(newBoard);
  //     }, 1000);
  //   }
  // }, [currentPentamino]);

  React.useEffect(() => {
    const originPoint = [1, 1];
    const newBoard = buildBoard();

    const rotatedPentamino = rotatePentamino(pentaminos[0], 90);

    console.log(JSON.stringify(pentaminos[0].cells));
    // [{"x":1,"y":1},{"x":1,"y":2},{"x":1,"y":3},{"x":1,"y":4},{"x":2,"y":4}]
    // [{"x":1,"y":1},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":4,"y":0}]
    console.log(JSON.stringify(rotatedPentamino.cells));

    drawPentamino(originPoint, rotatedPentamino, newBoard);

    setBoard(newBoard);
  }, []);

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
