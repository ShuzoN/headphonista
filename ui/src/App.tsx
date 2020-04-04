import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Header } from "./View/Header";
import { Top } from "./View/Top";
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
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
