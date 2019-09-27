//@flow
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rating from "../rating/Rating.component";
import App from "../App";
//import Meals from "../meals/Meals.component";
import getHistory from "./history";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Navigation = () => (
  <Wrapper>
    <Router>
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/dish1" component={Rating} />
      <Route exact path="/dish2" component={Rating} />
      <Route exact path="/dish3" component={Rating} />
      <Route exact path="/dish4" component={Rating} />
      <Route exact path="/rating" component={Rating} />
      <Route path="/rating1" render={() => <Rating />} />
    </Router>
  </Wrapper>
);
export default Navigation;
