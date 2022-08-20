import * as React from 'react';
import cx from 'classnames';
import './Fibonnacci.style.css';

export const Fibonnacci = () => {
  const [nextFibonnacci, setNextFibonnacci] = React.useState(1);
  const [currentFibonnacci, setCurrentFibonnacci] = React.useState(0);
  const [calculating, setCalculating] = React.useState(false);

  const calculate = () => {
    if (calculating) {
      setCalculating(false);
    } else {
      setCurrentFibonnacci(0);
      setNextFibonnacci(1);
      setCalculating(true);
    }
  };

  React.useEffect(() => {
    if (calculating) {
      setTimeout(() => {
        if (calculating) {
          const next = nextFibonnacci + currentFibonnacci;
          setCurrentFibonnacci(nextFibonnacci);
          setNextFibonnacci(next);
        }
      }, 500);
    }
  }, [calculating, currentFibonnacci, nextFibonnacci]);

  return (
    <div className={cx('fibonnacci')}>
      <button onClick={calculate}>
        {calculating ? 'Stop' : 'Start'} Fibonnacci
      </button>
      <div>{currentFibonnacci}</div>
    </div>
  );
};
