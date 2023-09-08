import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  background-color: #d7e0e9;
  padding: 11vw 0 11vw 11vw;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  @media (max-width: 768px) {
        padding: 11vw;
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
  .tech-categories{
    display: flex;
    column-gap: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 30px;
      }
  }
`;

export const TechnologiesText = styled.ul`
  color: #4F5460;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1.44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  @media (max-width: 768px) {
        font-size: 16px;
        letter-spacing: normal;
      }
  li{
    cursor: pointer;
    width: max-content;
    @media (max-width: 768px) {
        border: 1px solid #4F5460;
        padding: 20px 10px;
        border-radius: 50px;  
      }
  }
  .selected {
    color: #000309;
    list-style: disc;
    @media (max-width: 768px) {
        list-style: none;
        border: 1px solid #000309;
      }
  }
`;

export const TechStackContainer = styled.div`
width: 60%;
 display:  grid;
 grid-template-columns: repeat(5, 1fr);
 gap: 40px;
 @media (max-width: 768px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        align-self: center;
      }

    
`

export const TechStackItem = styled.div`
aspect-ratio: 1;
border-radius: 100%;
background: linear-gradient(92deg, white 0%, rgba(255, 255, 255, 0) 100%); 
box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;

.image-container{
    width: 50%;
    aspect-ratio: 1;
    img{
        max-width: 100%;
        max-height: 100%;
    }
}
`
