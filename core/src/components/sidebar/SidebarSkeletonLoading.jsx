import { motion } from "framer-motion"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './sidebar.css'

export default function SidebarSkeleton() {
    return (
        <SkeletonTheme 
            baseColor="var(--skeleton-base)" 
            highlightColor="var(--skeleton-highlight)"
        >
            <motion.aside 
                className="sidebar"
                initial={false}
                animate={{ width: 300, opacity: 1 }}
            >
                <div className="sidebar-inner">
                    {/* Header Skeleton */}
                    <div className="sidebar-header">
                        <div className="sidebar-header-main-item">
                            <Skeleton width={20} height={20} />
                            <Skeleton width={120} height={10} />
                        </div>
                    </div>

                    {/* Nav Items Skeleton */}
                    <div className="sidebar-nav">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="sidebar-item">
                                <div className="sidebar-item-icon">
                                    <Skeleton width={16} height={16} />
                                </div>
                                <Skeleton width={80} height={10} />
                            </div>
                        ))}
                    </div>

                    {/* Content Section Skeleton */}
                    <div className="sidebar-content">
                        <div style={{ padding: '12px 8px 8px 8px' }}>
                            <Skeleton width={60} height={12} />
                        </div>

                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="sidebar-item">
                                <div className="sidebar-item-icon">
                                    <Skeleton width={16} height={16} />
                                </div>
                                <Skeleton width={100} height={10} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.aside>
        </SkeletonTheme>
    )
}