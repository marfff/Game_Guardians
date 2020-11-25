import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar/navBar';
import NavbarLI from './components/navbar/navBarLoggedIn';
import Signup from './components/signup/signUp';
import Main from './components/main/main';
import Login from './components/login/login';
import CreateReview from './components/createreview/createReview';
import Logout from './components/logout/Logout';
import UserPage from './components/userPage/userPage';
import DeleteUser from './components/deleteUser/DeleteUser';
import Games from './components/game/gamesSummary';
import Game from './components/game/game';
import Reviews from './components/reviews/reviewSummary';
import Review from './components/reviews/reviews'
import PageNotFound from './components/pagenotfound/pagenotfound';
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
            <Route exact path = "/deleteUser" component = {NavbarLI} />
            <Route exact path = "/game" component = {NavbarLI} />
            <Route exact path = "/games" component = {NavbarLI} />
            <Route exact path = "/reviews" component = {NavbarLI}/>
            <Route exact path = "/review" component = {NavbarLI}/>
            <Route exact path = "/" component = {Navbar} />
            <Route exact path = "/login" component = {Navbar} />
            <Route exact path = "/logout" component = {Navbar} />

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
              <Route exact path = "/reviews" component = {Reviews}/>
              <Route path = "/404" component = { PageNotFound } />
              <Redirect to="404" />
            </Switch>
          </body>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
