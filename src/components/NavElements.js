import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #033E3E;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem calc((100vw - 1200px) / 2);
    z-index: 12;
    position: sticky;
    top: 0;

`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #EDE275;
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

export const NavLink = styled.a`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.25rem;
height: 60%;
cursor: pointer;
font-size: 1.5rem;
background-image: linear-gradient(to bottom right, #25383C, #B4CFEC);
border-radius: 20px;
&.active {
  color: black;
}
&:hover {
    background-image: linear-gradient(to bottom right, #B4CFEC, #25383C);

}
`;







