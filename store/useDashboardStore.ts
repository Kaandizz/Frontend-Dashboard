"use client";

import { create } from 'zustand';

interface DashboardState {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  loading: false,
  setLoading: (val) => set({ loading: val }),
}));
