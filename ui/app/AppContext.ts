import { createContext } from 'react';
import { FiatCurrencySymbol } from '../../domain/models/FiatCurrencySymbol';

export type AppContextStore = {
  loading: boolean;
  fiatSymbols: FiatCurrencySymbol[];
};

export const AppContext = createContext<AppContextStore>(undefined);
