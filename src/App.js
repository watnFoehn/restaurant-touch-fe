import React from "react";
import Meals from "./meals/Meals.component";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSvgIcon: {
      // Name of the rule
      fontSizeLarge: {
        // Some CSS
        fontSize: 80
      }
    }
  }
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Please rate your meal</Typography>
        <Meals />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
