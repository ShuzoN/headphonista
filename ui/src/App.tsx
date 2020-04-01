import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React  from 'react';
import { Header } from './View/Header';


const App = (): JSX.Element => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>hoge</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
