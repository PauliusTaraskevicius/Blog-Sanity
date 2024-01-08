import { create } from "zustand";

interface useMobileSheetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSheet = create<useMobileSheetProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
