import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { KrakenScreen } from '../screens/KrakenScreen/KrakenScreen';
import { AppProvider } from './AppProvider';
import ErrorBoundary from './ErrorBoundary';
import { Navigator } from './Navigator';
import './App.style';

const App = () => {
  return (
    <ErrorBoundary onError={(error) => console.log(JSON.stringify(error))}>
      <AppProvider>
        <BrowserRouter>
          <Navigator />
          <Routes>
            <Route path="/kraken" element={<KrakenScreen />} />
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
