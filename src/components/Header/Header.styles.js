import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Container } from "../../styles/GlobalStyle";
import { motion } from "framer-motion";

export const MainHeader = styled.header`
  position: absolute;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
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

  @media screen and (min-width: 992px) {
    display: none;
  }
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
  z-index: 9999;
  //for show menu animation
  opacity: ${({ show }) => (show ? 1 : 0)};
  //for show menu animation
  height: ${({ show }) => (show ? "auto" : 0)};
  //for show menu animation
  overflow: hidden;
  transition: all 0.4s ease;

  @media screen and (min-width: 992px) {
    position: initial;
    display: initial;
    background: initial;
    box-shadow: none;
    top: initial;
    z-index: 0;
    width: initial;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  margin: 1.6rem 0;
  z-index: 888;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    width: 460px;
    margin: 0;
    justify-content: space-between;
  }
`;

export const NavMenuItem = styled.li`
  width: 80%;

  &:nth-child(3) {
    margin-bottom: 1.6rem;
  }

  &:nth-child(2) {
    margin: 1.6rem 0;
  }

  &:hover a {
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    width: initial;
    margin-left: 3rem;
    &:nth-child(3) {
      margin: 0;
    }

    &:nth-child(2) {
      margin: 0;
    }
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

  @media screen and (min-width: 992px) {
    padding: 0;
    font-size: 1rem;
    width: initial;
    height: initial;
    text-align: left;
  }
`;

export const NavLoginLink = styled(NavMenuLink)`
  color: ${({ theme }) => theme.GrayishBlue};
  border-top: 1px solid ${({ theme }) => theme.GrayishBlue};
  padding: 0.7rem 0;
  padding-top: 1.5rem;

  @media screen and (min-width: 992px) {
    border-top: 0;
    padding: 0;
    margin-left: auto;
  }
`;
