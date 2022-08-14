import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import AdminProfile from './adminPages/AdminProfile';
import React from 'react';

class App extends React.Component {

  state = {
    isLoggedIn: false,
    username: undefined
  };

  signInSuccess = (username) => {
      this.setState({
        username,
        isLoggedIn: true
      })
  }


  render(){

    const {isLoggedIn, username} = this.state;

    return (
      <div>
        <Router>
          <NavBar username={username} isLoggedIn={isLoggedIn}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={(props) => {
              return <SignIn {...props}  signInSuccess={this.signInSuccess}/>
              }} 
            />
            <Route path="/signup" component={SignUp} />
            <Route path="/user/:username" component={AdminProfile} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
