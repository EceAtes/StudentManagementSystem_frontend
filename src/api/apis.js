import axios from "axios";

export const signUpApi = (body) => {
    return axios.post('/api/1.0/users', body);
}

export const login = creds => {
    return axios.post('/api/1.0/auth', {}, { auth: creds});
}

export const getUsers = () => {
    return axios.get('/api/1.0/users');
}

export const addCourse = (body) => {
    return axios.post('/courses', body);
}

export const getCourses = () => {
    return axios.get('/courses');
    
}
