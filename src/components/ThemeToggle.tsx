"use client"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark") // افتراضي داكن

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")

      const currentTheme = storedTheme || "dark" // لو مافي تخزين، خليه داكن

      setTheme(currentTheme)
      document.documentElement.setAttribute("data-theme", currentTheme)
      localStorage.setItem("theme", currentTheme) // نثبّت الداكن أول مرة
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "light" ? "🌙 dark " : "☀️ light"}
    </button>
  )
}