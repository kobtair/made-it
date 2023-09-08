import socialLinks from "../../data/socialLinks.json";
import navLinks from "../../data/navLinks.json";
import { Link } from "react-scroll";

import { FooterContainer, Logo, Links, FollowUs } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Logo>
        <img src="/src/assets/logo.png" alt="" />
      </Logo>
      <Links>
        {navLinks
          .filter((link) => link.id > 1)
          .map((link) => (
            <Link
              key={link.id}
              offset={link.offset * window.innerWidth}
              to={link.name}
              smooth={true}
              duration={500}
            >
              <li>{link.name}</li>
            </Link>
          ))}    
      </Links>
      <FollowUs>
        <h3 className="heading">FOLLOW US</h3>
        <div className="social-link">
          {socialLinks.map((link) => (
            <a target="blank" key={link.id} href={link.url}>
              <img src={link.imageUrl} alt={link.name} />
            </a>
          ))}
        </div>
      </FollowUs>
    </FooterContainer>
  );
}
