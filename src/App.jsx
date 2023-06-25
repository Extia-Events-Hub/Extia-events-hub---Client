import React, { useEffect } from "react";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";
import { Router } from "./router/Router";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AxiosInterceptor();
  useEffect(() => {
    AOS.init();
  });

  return <Router />;
}

export default App;
