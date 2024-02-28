'use client'

import { Theme, ThemeContextType } from '@/types/dataTypes'
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const ThemeContext = createContext<ThemeContextType>(null)

const ThemeState = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    theme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context) return context

  throw new Error('Use "useTheme" hook inside the ThemeContext Provider.')
}

export default ThemeState
export { ThemeContext, useTheme }
