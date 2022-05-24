import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
// import ProtectedRoute from "./ProtectedRoute";
import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as auth from '../../utils/auth';

function App() {

  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const history = useHistory();

  function handleRegistration(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        setIsRegister(true);
        // history.push('/signin');
      })
      .catch((err) => {
        console.log(err)
        setIsRegister(false);
      })
      console.log(name);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/movies' component={Movies}/>
        <Route path='/saved-movies' component={SavedMovies}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/signin' component={Login}/>
        <Route path="/signup">
            {/* {isLoggedIn ? <Redirect to="/movies" /> : <Register onRegister={handleRegistration} />} */}
            <Register onRegister={handleRegistration} />
          </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
