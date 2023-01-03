import { useState } from "react";
import NavbarDropdown from "./Navbar/NavbarDropdown";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarWraper from "./Navbar/NavbarWrapper";
// import logo from "../logo192.png";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropDawn = () => {
    setShowDropdown(!showDropdown);
  };

  const menuItems = [
    { label: "Home", link: "#" },
    { label: "section", link: "#" },
    { label: "article", link: "#" },
    { label: "bbb", link: "#" },
  ];
  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "#" },
  ];

  return (
    <NavbarWraper>
      <NavbarMenu title={"Admin"} items={menuItems} />
      <NavbarDropdown
        img="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        items={dropdownItems}
      />
    </NavbarWraper>
  );
}
