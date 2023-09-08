import {
  AboutUsContainer,
  AboutImageContainer,
  AboutTextContainer,
} from "./about-us.styles";

export default function AboutUs() {
  return (
    <AboutUsContainer id="About Us">
      <AboutTextContainer>
        <h1 className="heading">About Us</h1>
        <p className="para">
          We are a passionate team of dedicated professionals committed to
          creating exceptional projects that consistently exceed our clients'
          expectations. Our greatest reward is the satisfaction of our clients
          with our work. If you're interested in learning more about our team,
          exploring our portfolio, or discovering our workflow, please reach out
          to us using the form below. We eagerly anticipate the opportunity to
          discuss how we can help you achieve your objectives and turn your
          visions into reality.
        </p>
      </AboutTextContainer>
      <AboutImageContainer><img src="/about.png" alt="about" /></AboutImageContainer>
    </AboutUsContainer>
  );
}
