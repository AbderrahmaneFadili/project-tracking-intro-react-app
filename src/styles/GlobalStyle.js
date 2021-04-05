import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Reset Style */
*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:${({ theme }) => theme.mainFontSize};
    font-family:${({ theme }) => theme.bodyFont};
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export default GlobalStyle;
