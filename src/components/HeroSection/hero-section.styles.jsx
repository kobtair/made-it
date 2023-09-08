import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  padding-left: 11vw;
  padding-bottom: 11vw;
  background-color: #100f14;
  display: flex;
  color: white;
  column-gap: 10%;
  @media (max-width: 768px) {
        padding: 11vw;
      }
`;
export const HeroTextContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
        row-gap: 20px;
      }
  .text {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    

    .heading {
      font-family: Lato;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media (max-width: 768px) {
        font-size: 40px;
        white-space: nowrap;
      }
    }
    .para {
      font-family: Lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 137.5%; 
      letter-spacing: -0.1px;
      @media (max-width: 768px) {
        font-size: 16px;

      }
    }
  }
`;

export const HeroImageContainer = styled.div`
  background-color: black;
  padding: 0 0 20px 20px;
  width: fit-content;
  @media (max-width: 768px) {
    display: none;
  }
`;
