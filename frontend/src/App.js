import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navBar';
import Signup from './components/signup/signUp';
import Main from './components/main/main';
import Login from './components/login/login';
import CreateReview from './components/createreview/createReview';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <body className ="AppBody">
            <Switch>
              <Route exact path = "/" component = {Signup} />
              <Route exact path = "/main" component = {Main} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/createReview" component = {CreateReview} />
            </Switch>
          </body>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
