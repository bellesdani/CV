import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { getCvContent, type CvContent } from '../assets/cv'
import type { Locale } from '../types'

const STORAGE_KEY = 'cv-daniel-locale'
const FALLBACK_LOCALE: Locale = 'es'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  content: CvContent
}

const I18nContext = createContext<I18nContextValue | null>(null)

function normalizeLocale(value: string | null | undefined): Locale {
  if (value === 'es' || value === 'en' || value === 'fr' || value === 'it') {
    return value
  }

  return FALLBACK_LOCALE
}

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return FALLBACK_LOCALE
  }

  const fromStorage = normalizeLocale(window.localStorage.getItem(STORAGE_KEY))
  if (fromStorage !== FALLBACK_LOCALE || window.localStorage.getItem(STORAGE_KEY) === FALLBACK_LOCALE) {
    return fromStorage
  }

  const browser = window.navigator.language.slice(0, 2).toLowerCase()
  return normalizeLocale(browser)
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [localeState, setLocaleState] = useState<Locale>(resolveInitialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    }
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale: localeState,
      setLocale,
      content: getCvContent(localeState),
    }),
    [localeState, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)

  if (!ctx) {
    throw new Error('useI18n must be used inside I18nProvider')
  }

  return ctx
}
