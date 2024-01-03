import { Todo } from '@/lib/defenitions';
import axios from 'axios';

export const getTodo = (id: number) => {
  return axios.get<{ item: Todo }>(`/api/todo/${id}`);
};

type EditTodoRequest = {
  id: number;
  contents: string;
};

export const editTodo = (data: EditTodoRequest) => {
  return axios.post('/api/todo/edit', data).catch((error) => console.log('error ', error));
};

type DeleteTodoRequest = {
  id: number;
};

export const deleteTodo = (data: DeleteTodoRequest) => {
  return axios.delete('/api/todo/delete', { data }).catch((error) => console.log('error ', error));
};
