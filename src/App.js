import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Main from './Main'
import Double from './Double'
import Single from './Single'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/translatorkit' component={Main}/>
        <Route exact path='/single' component={Single}/>
        <Route exact path='/double' component={Double}/>
      </div>
    );
  }
}

export default App;
