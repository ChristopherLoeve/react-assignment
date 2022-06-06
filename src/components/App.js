import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Header';
import CharactersList from './CharactersList'
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';
import UnderConstruction from './UnderConstruction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Switch>
            <Route exact path='/' component={Characters}/>
            <Route path='/CharacterDetails' component={CharacterDetails}/>
            <Route path='/About' component={UnderConstruction}/>
            <Route path='/Admin' component={UnderConstruction}/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;