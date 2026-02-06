import { useState, useEffect } from "react";

import { useTheme } from "../../hooks/themeHook"

import { useSidebar } from "../../hooks/useSidebar"

export default function Home(){
    const { theme, setTheme, themes } = useTheme()
    const { toggle } = useSidebar()

    return (
        <main>
            
            <h1>Home page</h1>

            <button onClick={toggle}>
                Toggle Sidebar
            </button>

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                <button
                onClick={() => setTheme(themes.DARK)}
                disabled={theme === themes.DARK}
                >
                Dark
                </button>

                <button
                onClick={() => setTheme(themes.LIGHT)}
                disabled={theme === themes.LIGHT}
                >
                Light
                </button>

                <button
                onClick={() => setTheme(themes.SYSTEM)}
                disabled={theme === themes.SYSTEM}
                >
                System
                </button>

                <button className="custom-padding-button">Hello there giorgi</button>
            </div>
        </main>
    )
}