import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.style';

// Note: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

export const Navigator = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/kraken">Kraken</Link>
  </nav>
);
