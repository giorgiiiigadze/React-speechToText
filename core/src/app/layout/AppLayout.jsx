import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { useAuth } from "../../context/AuthContext"

import { useSidebar } from "../../hooks/useSidebar"

import Sidebar from "../../components/sidebar/Sidebar"
import SidebarSkeleton from "../../components/sidebar/SidebarSkeletonLoading"
import Header from "../../components/header/Header"

import '../layout/AppLayout.css'

export default function AppLayout() {
    const { user } = useAuth()

    const { isOpen } = useSidebar()

    return (
        <div className="app-layout">
            <div className="app-main">
                <Suspense fallback={<SidebarSkeleton />}>
                    <Sidebar />
                </Suspense>
                <main className="app-content">
                    <Header user={user}/>
                    <Suspense fallback={<div>Loading page…</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    )
}
