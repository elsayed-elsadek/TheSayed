"use client"
import { useState, useEffect } from "react"
import { Home, Sun, Moon, Aperture, PanelsTopLeft, SquareCode } from "lucide-react"

export default function Header() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute("data-theme", stored)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="
      fixed z-50 w-full 
      bottom-4 left-1/2 -translate-x-1/2 
      bg-base-200 shadow-md rounded-full 
      px-4 py-2 flex items-center justify-center gap-4 
      backdrop-blur border border-base-300

      lg:top-0 lg:left-0 lg:translate-x-0 lg:rounded-none 
      lg:justify-center lg:px-8 lg:py-3 lg:bottom-auto
    ">
    <a href="">
        <button className="btn btn-ghost btn-sm rounded-full flex items-center gap-1">
            <Home size={20} />
            <span className="hidden lg:inline">Home</span>
        </button>
    </a> 

    <a href="#about">
      <button className="btn btn-ghost btn-sm rounded-full flex items-center gap-1">
          <Aperture size={20} />
          <span  className="hidden lg:inline">About</span>
      </button>
    </a>

    <a href="#Projects">
     <button className="btn btn-ghost btn-sm rounded-full flex items-center gap-1">
        <PanelsTopLeft size={20} />
        <span className="hidden lg:inline">Projects</span>
      </button>
    </a>

    <a href="#skills">
     <button className="btn btn-ghost btn-sm rounded-full flex items-center gap-1">
        <SquareCode  size={20} />
        <span className="hidden lg:inline">Skills</span>
      </button>
    </a>
      
      
      <button onClick={toggleTheme} className="btn btn-ghost btn-sm rounded-full">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  )
}
