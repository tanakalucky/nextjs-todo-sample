import { useEffect } from 'react';
import { getTodos } from '@/lib/api';
import { useTodosStore } from '@/store';

export const useTodos = () => {
  const todos = useTodosStore((state) => state.todos);
  const setTodos = useTodosStore((state) => state.setTodos);

  useEffect(() => {
    getTodos(
      (res) => setTodos(res),
      (error) => console.log('error occurred ', error),
    );
    // eslint-why for render first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { todos, setTodos };
};
