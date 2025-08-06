"use client";
import { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'

export function useThemeInit(){
  const toggle = useThemeStore.getState().toggleTheme

  useEffect(() => {
    const root = window.document.documentElement
    const saved = localStorage.getItem('theme')

    if (saved === 'dark') {
      root.classList.add('dark')
      useThemeStore.setState({ isDark: true })
    } else {
      root.classList.remove('dark')
      useThemeStore.setState({ isDark: false })
    }
  }, [toggle])
}
