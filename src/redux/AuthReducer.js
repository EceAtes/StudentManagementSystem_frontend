const defaultInfo = {
    isLoggedIn: false,
    username: undefined,
    password: undefined,
    accountType: undefined
  };

  const authReducer = (state = { ...defaultInfo }, action) => {
    if(action.type === 'logout-success') {
        return defaultInfo;
    } else if ( action.type === 'login-success') {
        return{
            ...action.payload,
            isLoggedIn: true
        };
    }
    return state;
} 

export default authReducer;