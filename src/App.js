import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import StudentProfile from './studentPages/StudentProfile';
import AdminProfile from './adminPages/AdminProfile';
import React from 'react';
import UserCard from './components/UserCard';
import AddUser from './adminPages/AddUser';

class App extends React.Component {

  state = {
    isLoggedIn: true,
    username: undefined,
    accountType: undefined
  };

  signInSuccess = (username, accountType) => {
      this.setState({
        isLoggedIn: true,
        username,
        accountType
      })
  }

  logoutSuccess = () => {
    this.setState({
      isLoggedIn: false,
      username: undefined,
      accountType: undefined
    })
  }


  render(){

    const {isLoggedIn, username, accountType} = this.state;
    /* console.log("App:");
    console.log(username); */
    return (
      <div>
        <Router>
          <NavBar username={username} isLoggedIn={isLoggedIn} logoutSuccess={this.logoutSuccess}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={(props) => {
              return <SignIn {...props} signInSuccess={this.signInSuccess}/>
              }} 
            />
            <Route path="/signup" component={SignUp} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/user/:username" component={props => {
              console.log("app:" + accountType);
              if(accountType === "admin" || accountType === "Admin"){
                return <AdminProfile {...props} username={username} />
              }
              return <StudentProfile {...props} username={username} />
            }} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
