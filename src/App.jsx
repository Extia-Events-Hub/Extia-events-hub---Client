import Navbar from './components/ui/navbar/Navbar';
import { AxiosInterceptor } from './interceptors/axios.interceptor';
import { Router } from './router/Router'

function App() {
  AxiosInterceptor();

  return (
    <Router />
  )
}

export default App