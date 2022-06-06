import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CharacterDetails from './CharacterDetails';
import CharactersList from './CharactersList';

const Characters = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={CharactersList} />
        <Route path='/CharacteDetails/:CharacterName' component={CharacterDetails} />
      </Switch>
    </div>
  )
}

export default Characters