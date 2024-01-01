import { create } from 'zustand';

type State = {
  isOpen: boolean;
  id: number;
  contents: string;
};

type Action = {
  open: () => void;
  close: () => void;
  setId: (id: State['id']) => void;
  setContents: (contents: State['contents']) => void;
};

export const useEditTodoModalStore = create<State & Action>((set) => ({
  isOpen: false,
  id: 0,
  contents: '',
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
  setId: (id) => set(() => ({ id })),
  setContents: (contents) => set(() => ({ contents })),
}));
