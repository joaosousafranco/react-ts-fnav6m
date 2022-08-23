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
        <footer>
          <div>Code at:</div>
          <a
            href="https://github.com/joaosousafranco/react-ts-fnav6m"
            target="_blank"
          >
            https://github.com/joaosousafranco/react-ts-fnav6m
          </a>
        </footer>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
