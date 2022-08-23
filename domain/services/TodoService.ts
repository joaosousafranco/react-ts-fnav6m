import * as HttpAdapter from '../../adapters/HttpAdapter'
import { ToDo } from '../models/ToDo';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';

export const getToDos = async () => {
  const response = await HttpAdapter.get<ToDo[]>({
    url: TODOS_URL,
  });
  return response.body;
}