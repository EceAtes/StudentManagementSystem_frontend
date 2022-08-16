export const logoutSuccess = () => {
    return {
        type: 'logout-success'
    };
}

export const signInSuccess = (authData) => {
    return {
        type: 'login-success',
        payload: authData
    }
}