import { Link } from "react-scroll";

import {
  HeroSectionContainer,
  HeroImageContainer,
  HeroTextContainer,
} from "./hero-section.styles";

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroTextContainer>
        <div className="text">
          <h1 className="heading">IT Solutions</h1>
          <p className="para">
            We invest in out team advancement to provide innovative technical
            solutions in order to make better future for your business
          </p>
        </div>
        <Link
          offset={0.08 * window.innerWidth}
          to={"Contact Us"}
          smooth={true}
          duration={500}
        >
          <button className="btn">CONTACT US</button>
        </Link>
      </HeroTextContainer>
      <HeroImageContainer>
        <img src="/hero-image.png" alt="hero" width={450} />
      </HeroImageContainer>
    </HeroSectionContainer>
  );
}
