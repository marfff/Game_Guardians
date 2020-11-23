import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navBar';
import NavbarLI from './components/navbar/navBarLoggedIn';
import Signup from './components/signup/signUp';
import Main from './components/main/main';
import Login from './components/login/login';
import CreateReview from './components/createreview/createReview';
import Logout from './components/logout/Logout';
import UserPage from './components/userPage/userPage';
import DeleteUser from './components/deleteUser/DeleteUser';
import Games from './components/game/games';
import Game from './components/game/game';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Switch>
            <Route exact path = "/main" component = {NavbarLI}/>
            <Route exact path = "/createReview" component = {NavbarLI}/>
            <Route exact path = "/account" component = {NavbarLI} />
            <Route exact path = "/" component = {Navbar} />
            <Route exact path = "/login" component = {Navbar} />
            <Route exact path = "/logout" component = {Navbar} />
            <Route exact path = "/deleteUser" component = {NavbarLI} />
            <Route exact path = "/games" component = {NavbarLI} />
            <Route exact path = "/game" component = {NavbarLI} />

          </Switch>
          </header>
          <body className ="AppBody">
            <Switch>
              <Route exact path = "/" component = {Signup} />
              <Route exact path = "/main" component = {Main} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/logout" component = {Logout} />
              <Route exact path = "/createReview" component = {CreateReview} />
              <Route exact path = "/account" component = {UserPage} />
              <Route exact path = "/deleteUser" component = {DeleteUser} />
              <Route exact path = "/games" component = {Games} />
              <Route exact path = "/game" component = {Game} />
            </Switch>
          </body>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
