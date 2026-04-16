import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ThemeMode = 'system' | 'dark' | 'light'
type ResolvedTheme = 'dark' | 'light'

const STORAGE_KEY = 'cv-daniel-theme'
const FALLBACK_MODE: ThemeMode = 'system'

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  resolvedTheme: ResolvedTheme
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function normalizeMode(value: string | null | undefined): ThemeMode {
  if (value === 'dark' || value === 'light' || value === 'system') {
    return value
  }

  return FALLBACK_MODE
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return FALLBACK_MODE
  }

  return normalizeMode(window.localStorage.getItem(STORAGE_KEY))
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [modeState, setModeState] = useState<ThemeMode>(resolveInitialMode)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    setSystemTheme(media.matches ? 'dark' : 'light')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextMode)
    }
  }, [])

  const resolvedTheme = modeState === 'system' ? systemTheme : modeState

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.documentElement.setAttribute('data-theme', resolvedTheme)
    document.documentElement.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: modeState,
      setMode,
      resolvedTheme,
    }),
    [modeState, resolvedTheme, setMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return ctx
}
