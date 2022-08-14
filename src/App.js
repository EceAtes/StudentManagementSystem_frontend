import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import AdminProfile from './adminPages/AdminProfile';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user/:username" component={AdminProfile} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
