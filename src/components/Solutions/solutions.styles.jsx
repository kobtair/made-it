import styled from "styled-components";

export const SolutionsContainer = styled.div`
  padding: 11vw;
  background-color: F6F9FE;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  .btn{
    align-self: center;
  }
  .heading {
    color: #000309;
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

export const SolutionItem = styled.div`
  display: flex;
  column-gap: 30px;
  &.odd {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
        flex-direction: column;
        &.odd{
          flex-direction: column;
        }
      }
`;

export const SolutionImage = styled.div`
  @media (max-width: 768px) {
        width: 50vw;
      }
  img {
    @media (max-width: 768px) {
        max-width: 50vw;
      }

  }
`;

export const SolutionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
  h2 {
    color: #000309;
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.16px;
    @media (max-width: 768px) {
        font-size: 30px;
      }
  }
  p {
    color: rgba(0, 3, 9, 0.67);
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.9px;
  }
  
`;
