import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

const App = () => {
  const data=useContext(UserContext)
  return (
   <>
   <h1>My Fav Fruit is {data.user.sname}</h1>
   </>
  )
}

export default App