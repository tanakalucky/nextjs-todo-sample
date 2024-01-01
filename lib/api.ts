import { Todo } from '@/lib/defenitions';
import { deleteAPI, get, put } from '@/lib/axios';

type Error = {
  message: string;
};

export const getTodos = (handleSuccess: (res: Todo[]) => void, handleFailure: (error: Error) => void) => {
  get<{ items: Todo[] }>(
    'http://0.0.0.0:8000/todo',
    {},
    (res) => handleSuccess(res.items),
    (error) => handleFailure(error as Error),
  );
};

type CreateTodoRequest = {
  contents: string;
};

export const createTodo = (
  data: CreateTodoRequest,
  handleSuccess: () => void,
  handleFailure: (error: Error) => void,
) => {
  put('http://0.0.0.0:8000/todo', data, handleSuccess, (error) => handleFailure(error as Error));
};

type DeleteTodoRequest = {
  id: number;
};

export const deleteTodo = (
  data: DeleteTodoRequest,
  handleSuccess: () => void,
  handleFailure: (error: Error) => void,
) => {
  deleteAPI('http://0.0.0.0:8000/todo/delete', data, handleSuccess, (error) => handleFailure(error as Error));
};
