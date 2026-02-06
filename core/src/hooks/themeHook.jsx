import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || THEMES.SYSTEM
  })

  useEffect(() => {
    const root = document.documentElement

    let appliedTheme =
      theme === THEMES.SYSTEM ? getSystemTheme() : theme

    /**
     * IMPORTANT:
     * Dark is default → remove attribute
     * Light needs explicit override
     */
    if (appliedTheme === THEMES.DARK) {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", "light")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  // OS theme sync (system mode)
  useEffect(() => {
    if (theme !== THEMES.SYSTEM) return

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const root = document.documentElement
      if (getSystemTheme() === THEMES.DARK) {
        root.removeAttribute("data-theme")
      } else {
        root.setAttribute("data-theme", "light")
      }
    }

    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return ctx
}
