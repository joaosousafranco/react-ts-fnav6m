import { createContext } from 'react';
import { ToDo } from '../domain/models/ToDo';

export type AppContextStore = {
  toDos: ToDo[];
  loading: boolean;
};

export const AppContext = createContext<AppContextStore>(undefined);
