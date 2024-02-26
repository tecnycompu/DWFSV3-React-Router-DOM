import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home'
import Developers from '../Developers'
import Tutorials from '../Tutorials'
import Navbar from '../../Components/Navbar'
import Contact from '../Contact' 
import './App.css'

const AppRoutes = () => {
  let Routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Developers', element: <Developers /> },
    { path: '/Tutorials', element: <Tutorials /> },
    { path: '/Contact', element: <Contact /> },
  ])
  return Routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App