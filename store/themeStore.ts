"use client";

import { create } from 'zustand'

type ThemeState = {
  isDark: boolean
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () =>
    set((state) => {
      const newIsDark = !state.isDark

      if (typeof window !== 'undefined') {
        const root = window.document.documentElement
        if (newIsDark) {
          root.classList.add('dark')
          localStorage.setItem('theme', 'dark')
        } else {
          root.classList.remove('dark')
          localStorage.setItem('theme', 'light')
        }
      }

      return { isDark: newIsDark }
    }),
}))
