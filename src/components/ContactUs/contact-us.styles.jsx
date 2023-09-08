import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContactForm = styled.form`
  background-color: white;
  z-index: 10px;
  position: relative;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  aspect-ratio: 1;
  box-shadow: -5px 9px 9px 4px rgba(0, 0, 0, 0.25);
  padding: 100px 75px;
  @media (max-width: 768px) {
        padding: 50px 20px;
        width: 80%;
      }
  h3 {
    color: #100f14;
    font-family: Lato;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 40px;
      }
  }

`;
