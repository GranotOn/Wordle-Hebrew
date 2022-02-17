import create from "zustand";

export const useStore = create((set) => ({
  word: null,
  darkMode: true,
  popup: true,
  popupMessage: "",
  setWord: (newWord) => set((state) => ({ ...state, word: newWord })),
  toggleTheme: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
  togglePopup: () => set((state) => ({ ...state, popup: !state.popup })),
  setPopupMessage: (newMessage) =>
    set((state) => ({ ...state, popupMessage: newMessage })),
}));
