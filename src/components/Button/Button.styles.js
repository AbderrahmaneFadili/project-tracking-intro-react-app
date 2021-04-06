import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonElement = styled(Link)`
  text-decoration: none;
  background: ${({ theme, primary }) => (primary ? theme.red : "transparent")};
  font-family: ${({ theme }) => theme.headingNavigationFont};
  padding: 1rem 2rem;
  color: ${({ primary, theme }) => (primary ? "white" : theme.GrayishBlue)};
  border-radius: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: ${({ primary }) => (primary ? 600 : 400)};
  white-space: nowrap;
  text-align: center;
`;
