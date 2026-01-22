import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menubar1 from './components/Menubar1'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm'
import ShowProducts from './pages/ShowProducts'

const App = () => {
  return (
    <>
    <Router>
        <Menubar1/>
        <Routes>
            <Route path="/"  element={<Homepage/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/register"  element={<RegisterForm/>}/>
            <Route path="/shop"  element={<ShowProducts/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App