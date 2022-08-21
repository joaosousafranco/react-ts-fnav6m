type DefaultCanvasJSReact = {
  CanvasJSChart: any;
};

declare module 'canvasjs-react-charts' {
  const CanvasJSReact: DefaultCanvasJSReact;

  export default CanvasJSReact;
}
