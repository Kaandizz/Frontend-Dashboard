
import { useThemeStore } from '../store/themeStore' // Assuming the correct relative path to the theme-store file

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <button onClick={toggleTheme} className="p-2">
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
