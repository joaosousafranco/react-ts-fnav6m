import * as React from 'react';
import { AppProvider } from './AppProvider';
import ErrorBoundary from './ErrorBoundary';
import { Navigator } from './Navigator';
import './App.style';

const App = () => {
  return (
    <ErrorBoundary onError={(error) => console.log(JSON.stringify(error))}>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
