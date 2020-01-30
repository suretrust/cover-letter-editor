import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/css/App.css';
import Home from './Home';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit" exact component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
