'use server';

import axios from 'axios';
import { Todo } from '@/api/types';

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
