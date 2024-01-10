import { create } from "zustand";

type settingsState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSettings = create<settingsState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
