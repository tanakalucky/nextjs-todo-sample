import { create } from 'zustand';

type State = {
  isShow: boolean;
};

type Action = {
  show: () => void;
  hide: () => void;
};

export const useSpinnerStore = create<State & Action>((set) => ({
  isShow: false,
  show: () => set(() => ({ isShow: true })),
  hide: () => set(() => ({ isShow: false })),
}));
