import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const authService = {

    show: (userId) => {
        return axios.get(baseUrl + "/users/" + userId);
    },
    update: (userId, data) => {
        return axios.put(baseUrl + "/users/" + userId, data)
    },
    login: (data) => {
        return axios.post(baseUrl + "/auth/login", data);
    },
    register: (data) => {
        return axios.post(baseUrl + "/auth/register", data);
    },
    logout: () => {
        return axios.get(baseUrl + "/auth/logout");
    },
    delete: (userId) => {
        return axios.delete(baseUrl + "/users/" + userId);
    },
};
