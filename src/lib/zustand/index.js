import { create } from "zustand";

export let useAppStore = create((set) => {
  return {
    filter: "",
    isOpen: false,
    setFilter: (value) => set((state) => ({ filter: value })),
    setOpen: (value) => set({ isOpen: value }),
  };
});
