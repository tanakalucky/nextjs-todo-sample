import { create } from 'zustand';

type State = {
  contents: string;
};

type Action = {
  setContents: (contents: State['contents']) => void;
};

export const useEditModalStore = create<State & Action>((set) => ({
  contents: '',
  setContents: (contents) => set(() => ({ contents })),
}));
