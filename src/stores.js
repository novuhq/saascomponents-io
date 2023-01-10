import create from 'zustand';

export const useSearchStore = create((set) => ({
  search: '',
  setSearch: (term) => set(() => ({ search: term })),
  resetSearch: () => set({ search: '' }),
}));
