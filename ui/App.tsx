import * as React from 'react';
import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { AppContext } from './AppContext';
import { ToDo } from '../domain/models/ToDo';
import { useFetch } from './hooks/useFetch';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';

const App = () => {
  const {
    fetching: loading,
    data: toDos = [],
    errorCode,
  } = useFetch<ToDo[]>({
    url: TODOS_URL,
  });

  return (
    <AppContext.Provider
      value={{
        toDos,
        loading,
      }}
    >
      {errorCode ? (
        <div>
          Failed to get data {errorCode} - {JSON.stringify(toDos)}
        </div>
      ) : (
        <HomeScreen />
      )}
    </AppContext.Provider>
  );
};

export default App;
