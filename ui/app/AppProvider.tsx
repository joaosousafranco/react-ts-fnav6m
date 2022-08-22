import * as React from 'react';
import { ReactNode } from 'react';
import { FiatCurrencySymbol } from '../../domain/models/FiatCurrencySymbol';
import { getFiatCurrencies } from '../../domain/services/FiatService';
import { useService } from '../hooks/useService';
import { AppContext } from './AppContext';



type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { data: fiatSymbols } = useService<FiatCurrencySymbol[]>(
    () => getFiatCurrencies(),
    []
  )

  return (
    <AppContext.Provider value={{ fiatSymbols: fiatSymbols || [] }}>
      {children}
    </AppContext.Provider>
  );
};
