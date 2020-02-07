import React from 'react';
import {BrowserRouter as Router,NavLink,Switch,Route } from 'react-router-dom'
import './App.css';
import './gsass.sass';
import Counter from './Counter'
import Bulb from './Bulb'
import WordCloud from './WordCloud'

function App() {
  return (
    <div className="App">
      <h1>demo</h1><br/>
      <Router>
        <div className="NavLink">
        <NavLink style={{textDecoration:'none'}} activeStyle={{fontSize:"30px"}} to="/Counter">counter </NavLink>
        <NavLink style={{textDecoration:'none'}} activeStyle={{fontSize:"30px"}} to="/Bulb">Bulb </NavLink>
        <NavLink style={{textDecoration:'none'}} activeStyle={{fontSize:"30px"}} to="/WordCloud">Word Cloud </NavLink>
        </div>
        <Switch>
          <Route path="/Counter" component={Counter} />
          <Route path="/Bulb" component={Bulb} />
          <Route path="/WordCloud" component={WordCloud} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
