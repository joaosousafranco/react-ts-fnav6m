import * as React from 'react';
import { ReactNode } from 'react';
import { FiatCurrencySymbol } from '../../domain/models/FiatCurrencySymbol';
import { useFetch } from '../hooks/useFetch';
import { AppContext, AppContextStore } from './AppContext';

const CURRENCIES_SYMBOLS_URL =
  'https://gist.githubusercontent.com/nhalstead/4c1652563dd13357ab936fc97703c019/raw/d5de097ef68f37501fb4d06030ca49f10f5f963a/currency-symbols.json';

type AppProviderProps = {
  children: ReactNode;
} & AppContextStore;

export const AppProvider = ({ children }: AppProviderProps) => {
  const { fetching: loading, data: fiatSymbols } = useFetch<
    FiatCurrencySymbol[]
  >({ url: CURRENCIES_SYMBOLS_URL }, []);

  return (
    <AppContext.Provider value={{ fiatSymbols: fiatSymbols || [] }}>
      {children}
    </AppContext.Provider>
  );
};
