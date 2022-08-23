import * as React from 'react';
import { AppProvider } from './AppProvider';
import ErrorBoundary from './ErrorBoundary';
import { Navigator } from './Navigator';
import cx from 'classnames';
import './App.style';

const App = () => {
  return (
    <ErrorBoundary onError={(error) => console.log(JSON.stringify(error))}>
      <AppProvider>
        <Navigator />
        <div className={cx('footer')}>
          <div>Code at:</div>
          <a
            href="https://github.com/joaosousafranco/react-ts-fnav6m"
            target="_blank"
          >
            https://github.com/joaosousafranco/react-ts-fnav6m
          </a>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
