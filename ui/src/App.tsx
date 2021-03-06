import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Header } from "./View/Header";
import { Top } from "./View/Top/index";
import { Item } from "./View/Item/index";
import { Container } from "@material-ui/core";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />

      <Container maxWidth="md" disableGutters>
        <Router>
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route exact path="/item">
              <Item />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
