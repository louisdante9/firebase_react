import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Redirect} from 'react-router-dom';
import { Home } from './components/Home';
import PrivateRoute from './PrivateRoute'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Purpose  from './components/Purpose';
import EmailSent  from './components/EmailSent';
import fire from './config/fire';
import './App.css';

class App extends Component {
  state = {authenticated: false, user: null };

  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          user: null
        });
      }
    });
  }

  render() {
    const { authenticated } = this.state;

    return (
      <Router>
        <div className="app">
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
            <PrivateRoute
            exact
            path="/purpose/:id"
            component={Purpose}
            authenticated={authenticated}
          />
            <PrivateRoute
            exact
            path="/emailSent"
            component={EmailSent}
            authenticated={authenticated}
          />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
