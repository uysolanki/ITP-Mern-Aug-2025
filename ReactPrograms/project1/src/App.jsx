import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menubar2 from './components/Menubar2'

const App = () => {
  const Homepage = lazy(() => import('./pages/Homepage'))
  const Demo = lazy(() => import('./pages/Login'))
  const RegisterForm = lazy(() => import('./pages/RegisterForm'))
  const ShowProducts2 = lazy(() => import('./pages/ShowProducts2'))
  const SinglePage2 = lazy(() => import('./pages/SinglePage2'))


  return (
    <>
    <Router>
        <Menubar2/>
        <Suspense fallback={<h1>Loading page...</h1>}>
        <Routes>
            <Route path="/"  element={<Homepage/>}/>
            <Route path="/login"  element={<Demo/>}/>
            <Route path="/register"  element={<RegisterForm/>}/>
            <Route path="/shop"  element={<ShowProducts2/>}/>
            <Route path="/single/:prodid"  element={<SinglePage2/>}/>
        </Routes>
        </Suspense>
    </Router>
    </>
  )
}

export default App



