import { Todo } from '@/lib/defenitions';
import { get } from '@/lib/axios';

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
