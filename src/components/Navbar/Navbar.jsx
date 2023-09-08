import Drawer from "../TemporaryDrawer/TemporaryDrawer";
import navLinks from "../../data/navLinks.json";

import { NavbarContainer, NavLinksContainer, NavLink } from "./navbar.styles";

export default function Navbar() {
  return (
    <header>
      <NavbarContainer id="Home">
        <div className="image-container">
          <img
            src="/src/assets/logo.png"
            alt="Made It Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <NavLinksContainer>
          {navLinks.map((link) => (
            <NavLink offset={link.offset * window.innerWidth} to={link.name} smooth={true} duration={500}>
              {link.name}
            </NavLink>
          ))}
        </NavLinksContainer>
        <Drawer />
      </NavbarContainer>
    </header>
  );
}
