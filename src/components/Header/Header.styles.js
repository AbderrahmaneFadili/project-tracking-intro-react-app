import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";
import { motion } from "framer-motion";

export const MainHeader = styled.header`
  position: absolute;
  width: 100%;
  padding: 1.5rem 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
`;

export const MenuToggle = styled.div`
  cursor: pointer;
  width: 30px;
`;

export const MenuIcon = styled.img`
  width: 100%;
`;

export const Nav = styled(motion.nav)`
  width: 90%;
  position: fixed;
  top: 120px;
  -webkit-box-shadow: -4px 11px 15px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -4px 11px 15px 0px rgba(0, 0, 0, 0.2);
  background: white;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  margin: 1.6rem 0;
`;

export const NavMenuItem = styled.li`
  width: 80%;

  &:nth-child(3) {
    margin-bottom: 1.6rem;
  }

  &:nth-child(2) {
    margin: 1.6rem 0;
  }
`;

export const NavMenuLink = styled(Link)`
  font-family: ${({ theme }) => theme.headingNavigationFont};
  text-decoration: none;
  color: ${({ theme }) => theme.veryDarkBlue};
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
`;

export const NavLoginLink = styled(NavMenuLink)`
  color: ${({ theme }) => theme.GrayishBlue};
  border-top: 1px solid ${({ theme }) => theme.GrayishBlue};
  padding: 0.7rem 0;
  padding-top: 1.5rem;
`;
