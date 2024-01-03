import axios from 'axios';
import { Todo } from '@/api/types';

/** @note next.config.tsでリクエスト先を上書き */

export const getTodo = (id: number) => {
  return axios.get<{ item: Todo }>(`/api/todo/${id}`);
};

type CreateTodoRequest = {
  contents: string;
};

export const createTodo = (data: CreateTodoRequest) => {
  return axios.put('/api/todo', data).catch((error) => console.log('error ', error));
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
