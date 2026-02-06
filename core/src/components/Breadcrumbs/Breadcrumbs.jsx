import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ workspaceName = "Workspace" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: decodeURIComponent(seg)
      .replace(/-/g, " ")
      .replace(/_/g, " "), 
    path: "/" + segments.slice(0, i + 1).join("/"),
  }));

  const handleNavigation = (path, isCurrent) => {
    if (!isCurrent) {
      navigate(path);
    }
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      <button
        className="breadcrumb breadcrumb-link"
        onClick={() => navigate("/home")}
        aria-label={`Navigate to ${workspaceName}`}
      >
        {workspaceName}
      </button>

      {crumbs.length > 0 && <span className="separator" aria-hidden="true">/</span>}

      {crumbs.map((crumb, i) => {
        const isCurrent = i === crumbs.length - 1;
        
        return (
          <span key={crumb.path} className="breadcrumb-group">
            {isCurrent ? (
              <span 
                className="breadcrumb breadcrumb-current"
                aria-current="page"
              >
                {crumb.label}
              </span>
            ) : (
              <>
                <button
                  className="breadcrumb breadcrumb-link"
                  onClick={() => handleNavigation(crumb.path, false)}
                  aria-label={`Navigate to ${crumb.label}`}
                >
                  {crumb.label}
                </button>
                <span className="separator" aria-hidden="true">/</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}