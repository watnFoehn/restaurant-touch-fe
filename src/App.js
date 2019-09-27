import React from "react";
import Meals from "./meals/Meals.component";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper className="App">
      <Meals></Meals>
    </Wrapper>
  );
}

export default App;
