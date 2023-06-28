import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const AxiosInterceptor = () => {
  const { token } = useContext(AuthContext);

  const interceptor = axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  });
};
