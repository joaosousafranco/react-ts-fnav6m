import * as React from 'react';
import { ReactNode } from 'react';
import { AppContext, AppContextStore } from './AppContext';

type AppProviderProps = {
  children: ReactNode;
} & AppContextStore;

export const AppProvider = ({ children }: AppProviderProps) => (
  <AppContext.Provider value={{}}>{children}</AppContext.Provider>
);
