import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* Home Page */}
        <Home />
      </ThemeProvider>
    </Router>
  );
};

export default App;
