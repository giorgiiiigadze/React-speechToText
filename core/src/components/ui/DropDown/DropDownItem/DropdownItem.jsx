import '../DropDownItem/DropDownItem.css'

export function DropdownItem({ children, onClick, danger }) {
  return (
    <button
      className={`dropdown-item ${danger ? "danger" : ""}`}
      onClick={onClick}
    >
      <span style={{display: 'flex', alignItems: 'center'}}>{children}</span>
    </button>
  );
}
