import { useNavigate } from "react-router-dom"

import './sidebarItem.css'

export default function SidebarItem({ icon, content, url, hoverElement }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar-item" onClick={() => navigate(url)}>
      <div className="sidebar-item-icon">{icon}</div>

      <span className="sidebar-item-title">{content}</span>

      {hoverElement && (
        <button className="sidebar-item-hovered-element">
          {hoverElement}
        </button>
      )}
    </div>
  );
}
