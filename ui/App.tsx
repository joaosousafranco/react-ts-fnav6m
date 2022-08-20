import * as React from 'react';
import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { AppContext } from './AppContext';
import { ToDo } from '../domain/models/ToDo';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const getTodos = async () => {
    const response = await fetch(TODOS_URL);
    const data = await response.json();
    setToDos(data);
    setLoading(false);
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        toDos,
        loading,
      }}
    >
      <HomeScreen />
    </AppContext.Provider>
  );
};

export default App;
