import axios from 'axios';

type DeleteTodoRequest = {
  id: number;
};

export const deleteTodo = (data: DeleteTodoRequest) => {
  return axios.delete('/api/todo/delete', { data }).catch((error) => console.log('error ', error));
};
