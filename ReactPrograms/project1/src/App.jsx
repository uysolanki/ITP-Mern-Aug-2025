import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menubar2 from './components/Menubar2'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm'
import ShowProducts from './pages/ShowProducts'
import SinglePage from './pages/SinglePage'
import ShowProducts1 from './pages/ShowProducts1'
import SinglePage1 from './pages/SinglePage1'
import Demo from './components/Demo'

const App = () => {
  return (
    <>
    <Router>
        <Menubar2/>
        <Routes>
            <Route path="/"  element={<Homepage/>}/>
            <Route path="/login"  element={<Demo/>}/>
            <Route path="/register"  element={<RegisterForm/>}/>
            <Route path="/shop"  element={<ShowProducts1/>}/>
            <Route path="/single/:prodid"  element={<SinglePage1/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App



