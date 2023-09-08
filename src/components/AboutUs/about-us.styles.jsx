import styled from "styled-components";

export const AboutUsContainer = styled.div`
  padding: 11vw 0 11vw 11vw;
  background-color: #100f14;
  display: flex;
  column-gap: 20px;
  @media (max-width: 768px) {
        padding: 11vw 11vw 140px 11vw;
      }
  
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  width: 50%;
  @media (max-width: 768px) {
        width: auto;
      }
 
  .heading {
    color: #fff;
    font-family: Lato;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 40px;
      }
  }
  .para {
    color: #fff;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 117.5%; /* 23.5px */
    letter-spacing: 0.9px;
  }
`;

export const AboutImageContainer = styled.div`
  width: 49%;
  aspect-ratio: 1.274;
  padding: 0 0 20px 20px;
  background-color: black;
  @media (max-width: 768px) {
        display: none;
      }
  img{
    max-width: 100%;
  }
`;
