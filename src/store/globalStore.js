'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const storeName = 'PortfolioStore';
const devToolsEnabled = process.env.NODE_ENV === 'production' ? false : true;

const initialState = {
  background: null,
};

const storeOptions = (set, get) => ({
  ...initialState,
  setBackground: (background) => set((state) => ({ ...state, background })),
  resetState: () => set(() => ({ ...initialState })),
});

const useGlobalStore = create(
  devtools(storeOptions, {
    name: storeName,
    store: storeName,
    enabled: devToolsEnabled,
  })
);

const useBackground = () => useGlobalStore((state) => state.background);

// actions
const useSetBackground = () => useGlobalStore((state) => state.setBackground);
const useResetState = () => useGlobalStore((state) => state.resetState);

export { useBackground, useSetBackground, useResetState };
