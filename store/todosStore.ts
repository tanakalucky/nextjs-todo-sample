import { Todo } from '@/api/types';
import { create } from 'zustand';

type State = {
  todos: Todo[];
};

type Action = {
  setTodos: (todos: State['todos']) => void;
};

export const useTodosStore = create<State & Action>((set) => ({
  todos: [],
  setTodos: (todos) => set(() => ({ todos })),
}));
