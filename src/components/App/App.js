import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import './App.css';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/movies' component={Movies}/>
        <Route path='/saved-movies' component={SavedMovies}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/signin' component={Login}/>
        <Route path='/signup' component={Register} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
