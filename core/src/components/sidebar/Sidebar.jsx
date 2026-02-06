import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSidebar } from "../../hooks/useSidebar"
import { useAuth } from "../../context/AuthContext"
import { useAudios } from '../../context/AudioContext'

import SidebarHeader from "./SidebarHeader/SidebarHeader"
import SidebarItem from "./SidebarItem/SidebarItem"
import SidebarFooter from "./SidebarFooter/SidebarFooter"
import SidebarSection from './SidebarSection/SidebarSection'
import SidebarSkeleton from "./SidebarSkeletonLoading"

import AudioImage from "../ui/AudioImage/AudioImage"

import '../../components/sidebar/sidebar.css'

export default function Sidebar() {
    
    const { isOpen } = useSidebar()
    
    const { user, loading: authLoading } = useAuth();
    const { audios, loading: audiosLoading, loadAudios } = useAudios();
    const isLoading = authLoading || audiosLoading;

    useEffect(() => {
        loadAudios();
    }, []);

    if (isLoading) {
        return <SidebarSkeleton />;
    }

    return (
        <motion.aside 
            className="sidebar"
            initial={false}
            animate={{
                width: isOpen ? 300 : 0,
                opacity: isOpen ? 1 : 0
            }}
            transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="sidebar-inner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <SidebarHeader user={user}/>
                        
                        <div className="sidebar-nav">
                            <SidebarItem 
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 137 137" fill="none">
                                        <path d="M119.875 119.875L95.1008 95.1008" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M62.7917 108.458C88.0127 108.458 108.458 88.0127 108.458 62.7917C108.458 37.5707 88.0127 17.125 62.7917 17.125C37.5707 17.125 17.125 37.5707 17.125 62.7917C17.125 88.0127 37.5707 108.458 62.7917 108.458Z" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                } 
                                content={"search"}
                                url={'/home'}
                                hoverElement={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                }
                            />
                            <SidebarItem 
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 137 137" fill="none">
                                        <path d="M17.125 61.8582C17.1246 60.4088 17.4865 58.9768 18.1855 57.662C18.8845 56.3472 19.9038 55.1814 21.1722 54.2458L61.1305 24.3539C63.1912 22.8339 65.802 22 68.5 22C71.198 22 73.8088 22.8339 75.8695 24.3539L115.828 54.2458C117.096 55.1814 118.115 56.3472 118.814 57.662C119.513 58.9768 119.875 60.4088 119.875 61.8582V106.696C119.875 109.339 118.672 111.873 116.531 113.742C114.39 115.61 111.486 116.66 108.458 116.66H78.4896V86.5H68.5H58.5104V116.66H28.5417C25.5138 116.66 22.6099 115.61 20.4689 113.742C18.3278 111.873 17.125 109.339 17.125 106.696V61.8582Z" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                                content={"Home"}
                                url={'/home'}
                            />
                            <SidebarItem 
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 137 137" fill="none">
                                        <path d="M66.5021 125.583H102.75C105.778 125.583 108.682 124.381 110.823 122.239C112.964 120.098 114.167 117.195 114.167 114.167V45.6667C114.171 43.8578 113.817 42.0659 113.126 40.3944C112.434 38.723 111.418 37.205 110.137 35.9283L89.6551 15.4468C88.3783 14.1653 86.8604 13.1495 85.1889 12.4578C83.5175 11.7661 81.7256 11.4122 79.9167 11.4167H34.25C31.2221 11.4167 28.3182 12.6195 26.1772 14.7605C24.0362 16.9016 22.8333 19.8054 22.8333 22.8333V81.9146" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M79.9167 11.4167V39.9584C79.9167 41.4723 80.5181 42.9242 81.5886 43.9948C82.6591 45.0653 84.111 45.6667 85.625 45.6667H114.167" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M45.6667 114.167V74.2083L62.7917 82.6224" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M34.25 125.583C40.5553 125.583 45.6667 120.472 45.6667 114.167C45.6667 107.861 40.5553 102.75 34.25 102.75C27.9448 102.75 22.8333 107.861 22.8333 114.167C22.8333 120.472 27.9448 125.583 34.25 125.583Z" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                                content={"Audios"}
                                url={'/audios'}
                                hoverElement={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                }
                            />
                        </div>

                        <div className="sidebar-content">
                            {audios.length === 0 && (
                                <div className="sidebar-empty">
                                    No audios yet
                                </div>
                            )}

                            <SidebarSection title="Audios">
                                {audios.length === 0 && (
                                    <div className="sidebar-empty">
                                        No audios yet
                                    </div>
                                )}

                                {audios.map((audio) => (
                                    <SidebarItem
                                        key={audio.id}
                                        icon={
                                            <AudioImage />
                                        }
                                        content={audio.title}
                                        url={`/audios/${audio.id}`}
                                        hoverElement={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                        }
                                    />
                                ))}
                            </SidebarSection>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </motion.aside>
    )
}