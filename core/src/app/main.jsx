import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { ThemeProvider } from '../hooks/themeHook'
import { SidebarProvider } from '../hooks/useSidebar'
import { ToastProvider } from '../context/MessageContext/MessageContext'
import { AuthProvider } from '../context/AuthContext'
import { AudiosProvider } from '../context/AudioContext'

import '../styles/tokens.css'
import '../styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <ToastProvider>
          <AuthProvider>
            <AudiosProvider>
              <App />
            </AudiosProvider>
          </AuthProvider>          
        </ToastProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
