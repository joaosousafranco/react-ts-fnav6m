import { createContext } from 'react';

export type AppContextStore = {};

export const AppContext = createContext<AppContextStore>(undefined);
