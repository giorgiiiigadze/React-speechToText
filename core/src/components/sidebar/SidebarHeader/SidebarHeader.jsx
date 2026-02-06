import ProfileImage from "../../ui/ProfileImage/ProfileImage";

import { Dropdown } from "../../ui/DropDown/DropDown/DropDown";
import { DropdownItem } from "../../ui/DropDown/DropdownItem/DropdownItem";

export default function SidebarHeader({ user }) {
  return (
    <div className="sidebar-header">
      <Dropdown
        align="left"
        offsetLeft={20}
        trigger={() => (
          <main className="sidebar-header-main-item">
            
            <ProfileImage
              size={20}
              src={user?.avatar}
              name={user?.username}
              borderRadius={"4px"}
            />
            <div className="pill">{user?.username}s Workspace</div>
          </main>
        )}
        width={300}
      >
        {({ close }) => (
          <>
            <DropdownItem onClick={() => navigate("/profile")}>Profile</DropdownItem>
            <DropdownItem onClick={close}>Settings</DropdownItem>
            <DropdownItem onClick={close}>Settings</DropdownItem>
            <DropdownItem onClick={close}>Settings</DropdownItem>
            <DropdownItem onClick={close}>Settings</DropdownItem>
            <DropdownItem onClick={close} danger>Logout</DropdownItem>

          </>
        )}
      </Dropdown>
    </div>
  );
}
