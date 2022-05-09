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
import "animate.css/animate.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
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

        <Nav show={showMenu}>
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
