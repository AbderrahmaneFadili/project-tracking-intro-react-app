import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";
import { motion } from "framer-motion";

export const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 1.5rem 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
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
  -webkit-box-shadow: -10px 14px 21px -1px rgba(0, 0, 0, 0.3);
  box-shadow: -10px 14px 21px -1px rgba(0, 0, 0, 0.3);
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  width: 80%;
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
  padding: 1rem 0;
`;

export const NavLoginLink = styled(NavMenuLink)`
  color: ${({ theme }) => theme.GrayishBlue};
  border-top: 1px solid ${({ theme }) => theme.GrayishBlue};
  padding: 2rem 0;
`;
