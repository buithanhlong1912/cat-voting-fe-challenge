import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  // Navigation
  activeTab: number;
  
  // Error states
  globalError: string | null;
}

interface UIActions {
  // Navigation
  setActiveTab: (tab: number) => void;
  
  // Error handling
  setGlobalError: (error: string | null) => void;
  clearGlobalError: () => void;
}

type UIStore = UIState & UIActions;

export const useUIStore = create<UIStore>()(
  devtools(
    (set) => ({
      // Initial state
      activeTab: 0,
      isVoting: {},
      globalError: null,

      // Actions
      setActiveTab: (tab: number) => set({ activeTab: tab }),
      
      setGlobalError: (error: string | null) => set({ globalError: error }),
      clearGlobalError: () => set({ globalError: null }),
    }),
    {
      name: 'ui-store',
    }
  )
);