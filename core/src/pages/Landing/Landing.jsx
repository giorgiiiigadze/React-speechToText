import { useEffect } from "react"

import { useTheme } from "../../hooks/themeHook"
import { useSidebar } from "../../hooks/useSidebar"

import { useAuth } from "../../context/AuthContext"

export default function Landing(){
    const { theme, setTheme, themes } = useTheme()
    const { toggle } = useSidebar()

    const { user } = useAuth()

    return (
    <main>
        <h1>Landing Page {user?.username}</h1>

    </main>
    )
}