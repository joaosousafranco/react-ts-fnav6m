import * as React from 'react';
import { ReactNode } from 'react';
import { AppContext, AppContextStore } from './AppContext';

type AppProviderProps = {
  children: ReactNode;
} & AppContextStore;

export const AppProvider = ({ children, toDos, loading }: AppProviderProps) => (
  <AppContext.Provider value={{ toDos, loading }}>
    {children}
  </AppContext.Provider>
);
