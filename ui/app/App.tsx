import * as React from 'react';
import { ToDo } from '../../domain/models/ToDo';
import { useFetch } from '../hooks/useFetch';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { AppProvider } from './AppProvider';
import ErrorBoundary from './ErrorBoundary';

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
    <ErrorBoundary onError={(error) => console.log(JSON.stringify(error))}>
      <AppProvider toDos={toDos} loading={loading}>
        {errorCode ? (
          <div>
            Failed to get data {errorCode} - {JSON.stringify(toDos)}
          </div>
        ) : (
          <HomeScreen />
        )}
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
