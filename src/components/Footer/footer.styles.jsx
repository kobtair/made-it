import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 5vw 11vw 5vw 0;
  background-color: #100f14;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 50px;

      }
`;
export const Logo = styled.div`
  width: 30vh;
  @media (max-width: 768px) {
        align-self: flex-start;
      }
  img {
    max-width: 100%;
  }
`;
export const Links = styled.ul`
  align-self: center;
  display: flex;
  column-gap: 20px;
  @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 10px;

      }


  color: #fff;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;

  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .heading {
    color: #fff;
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
  }
  .social-link {
    display: flex;
    width: 24px;
    aspect-ratio: 1;
    column-gap: 20px;
  }
`;
