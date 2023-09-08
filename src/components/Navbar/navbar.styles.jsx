import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.nav`
  background-color: #100f14;
  display: flex;
  justify-content: space-between;
  padding-right: 11vw;
  align-items: center;
  .image-container {
    width: 200px;
  }
`;
export const NavLinksContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60%;
    @media (max-width: 768px) {
      display: none;
    }
    
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  
`;
