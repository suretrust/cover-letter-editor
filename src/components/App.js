import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/css/App.css';
import Home from './Home';
import Edit from './Edit';
import EditedLetter from './EditedLetter';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/final-copy" exact component={EditedLetter} />
      </Switch>
    </Router>
  );
}

export default App;
