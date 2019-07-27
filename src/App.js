import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import NoPage from './components/NoPage';
// import SideBar from './components/SideBar';

function App() {
  return (
    
    <BrowserRouter id='everything'>
      {/* <SideBar id='header'/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route component={NoPage}/>
    </Switch>
    </BrowserRouter>
  
  );
}

export default App;


