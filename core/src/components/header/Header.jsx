import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import { Dropdown } from "../ui/DropDown/DropDown/DropDown";
import { DropdownItem } from "../ui/DropDown/DropdownItem/DropdownItem";

import "../header/header.css"

export default function Header({user }) {
    const { toggle } = useSidebar()
    const navigate = useNavigate();

    return (
        <header className="header">
            <section className="header-left">
                <button className="custom-padding-button" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </button>
                <Breadcrumbs workspaceName={`${user?.username}'s Workspace`} />                
            </section>

            <section className="header-right">
                <button className="header-more-button bordered-button">
                    Share
                </button>
                <Dropdown
                    align="right"
                    offsetRight={10}
                    trigger={() => (
                        <button className="header-more-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                        </button>
                    )}
                    width={240}
                >
                    {({ close }) => (
                    <>
                        <DropdownItem onClick={() => navigate("/profile")}>Profile</DropdownItem>
                        <DropdownItem onClick={close}>Settings</DropdownItem>
                    </>
                    )}
                </Dropdown>                
            </section>



        </header>
    );
}
