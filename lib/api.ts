import { Todo } from '@/lib/defenitions';
import { deleteAPI, get, post, put } from '@/lib/axios';

type Error = {
  message: string;
};

export const getTodos = (handleSuccess: (res: Todo[]) => void, handleFailure: (error: Error) => void) => {
  get<{ items: Todo[] }>(
    `/api/todo`,
    {},
    (res) => handleSuccess(res.items),
    (error) => handleFailure(error as Error),
  );
};

export const getTodo = (id: number, handleSuccess: (res: Todo) => void, handleFailure: (error: Error) => void) => {
  get<{ item: Todo }>(
    `/api/todo/${id}`,
    {},
    (res) => handleSuccess(res.item),
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
  put('/api/todo', data, handleSuccess, (error) => handleFailure(error as Error));
};

type EditTodoRequest = {
  id: number;
  contents: string;
};

export const editTodo = (data: EditTodoRequest, handleSuccess: () => void, handleFailure: (error: Error) => void) => {
  post('/api/todo/edit', data, handleSuccess, (error) => handleFailure(error as Error));
};

type DeleteTodoRequest = {
  id: number;
};

export const deleteTodo = (
  data: DeleteTodoRequest,
  handleSuccess: () => void,
  handleFailure: (error: Error) => void,
) => {
  deleteAPI('/api/todo/delete', data, handleSuccess, (error) => handleFailure(error as Error));
};
