import { createStore } from 'redux';
import authReducer from './AuthReducer';

const loginInfo = {
  isLoggedIn: true,
  username: "user2",
  password: "passwordTest",
  accountType: "admin"
}

const configureStore = () => {
    return createStore(authReducer, loginInfo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore;