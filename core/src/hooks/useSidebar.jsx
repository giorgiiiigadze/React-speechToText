import { createContext, useContext, useState, useEffect } from "react"

const SidebarContext = createContext(null)

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("sidebar-open") !== "false"
  })

  useEffect(() => {
    localStorage.setItem("sidebar-open", isOpen)
  }, [isOpen])

  const toggle = () => setIsOpen((v) => !v)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) {
    throw new Error("useSidebar must be used inside SidebarProvider")
  }
  return ctx
}
