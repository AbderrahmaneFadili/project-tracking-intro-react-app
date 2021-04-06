import React from "react";
import { ButtonElement } from "./Button.styles";
const Button = ({ children, to, primary }) => {
  return (
    <ButtonElement primary={primary} to={to}>
      {children}
    </ButtonElement>
  );
};

export default Button;
