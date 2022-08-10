import axios from "axios";

export const signUpApi = (body) => {
    return axios.post('/api/1.0/users', body);
}

export const login = auths => {
    return axios.post('/api/1.0/auth', {}, { auth: auths});
}
