import * as React from 'react';
import * as CanvasJS from 'canvasjs-react-charts';

export const KrakenScreen = () => {
  React.useEffect(() => {
    console.log('new render');
  }, []);

  return <CanvasJS.Chart></CanvasJS.Chart>;
};
