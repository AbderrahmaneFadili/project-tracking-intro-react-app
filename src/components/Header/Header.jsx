import React, { useState } from "react";
import {
  Logo,
  MainHeader,
  MenuToggle,
  HeaderContainer,
  MenuIcon,
  Nav,
  NavMenu,
  NavMenuLink,
  NavMenuItem,
  NavLoginLink,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const showMenuAnimationConfig = {
    x: 0,
    y: 0,
    animationDuration: 400,
    opacity: showMenu ? 1 : 0,
  };

  return (
    <MainHeader>
      <HeaderContainer>
        {/* Logo */}
        <Link to="/">
          <Logo src={require("../../images/logo.svg").default} />
        </Link>
        {/* Menu Toggle */}
        <MenuToggle onClick={handleShowMenu}>
          {showMenu ? (
            <MenuIcon src={require("../../images/icon-close.svg").default} />
          ) : (
            <MenuIcon
              src={require("../../images/icon-hamburger.svg").default}
            />
          )}
        </MenuToggle>
        {/* Nav */}
        <Nav animate={showMenuAnimationConfig}>
          <NavMenu>
            <NavMenuItem>
              <NavMenuLink to="/product">product</NavMenuLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavMenuLink to="/features">features</NavMenuLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavMenuLink to="/pricing">pricing</NavMenuLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLoginLink to="/login">Login</NavLoginLink>
            </NavMenuItem>
          </NavMenu>
        </Nav>
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
