import * as React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

export const KrakenScreen = () => {
  React.useEffect(() => {
    console.log('new render');
  }, []);

  console.log(CanvasJSReact);

  return <CanvasJSChart></CanvasJSChart>;
};
