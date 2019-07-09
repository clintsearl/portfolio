import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route component={NoPage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;


