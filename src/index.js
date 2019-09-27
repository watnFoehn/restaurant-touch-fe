import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Meals from "./meals/Meals.component";
import Rating from "./rating/Rating.component";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/rating" component={Rating} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
