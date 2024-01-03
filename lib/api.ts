'use server';

import { Todo } from '@/lib/defenitions';
import { put } from '@/lib/axios';
import axios from 'axios';

type Error = {
  message: string;
};

export const getTodos = async (): Promise<Todo[]> => {
  let todos: Todo[] = [];

  await axios
    .get<{ items: Todo[] }>(`${process.env.API_URL}/todo`)
    .then((res) => {
      todos = res.data.items;
    })
    .catch((e) => {
      console.log('error ', e);
    });

  return todos;
};

type CreateTodoRequest = {
  contents: string;
};

export const createTodo = (
  data: CreateTodoRequest,
  handleSuccess: () => void,
  handleFailure: (error: Error) => void,
) => {
  put('/api/todo', data, handleSuccess, (error) => handleFailure(error as Error));
};
