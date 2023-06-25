import React from "react";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";
import { Router } from "./router/Router";

function App() {
  AxiosInterceptor();

  return <Router />;
}

export default App;
