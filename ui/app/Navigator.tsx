import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Web3Screen } from '../screens/Web3Screen/Web3Screen';
import './Navigator.style';

// Note: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

export const Navigator = () => (
  <BrowserRouter>
    <nav>
      <Link to="/web3">Web3</Link>
    </nav>
    <Routes>
      <Route path="/web3" element={<Web3Screen />} />
      <Route path="*" element={<Web3Screen />} />
    </Routes>
  </BrowserRouter>
);
