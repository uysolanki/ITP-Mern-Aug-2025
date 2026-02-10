import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "./redux/UserSlice";

const App = () => {
  const user = useSelector((state) => state.user );
  const dispatch = useDispatch(); 

  console.log(user)
  const [username,setUsername]=useState("")

  return (
   <>
    {
      user?(<div>
          <h1>Welcome ,{user}</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
      </div>):(

        <form onSubmit={
          (e)=>{
            e.preventDefault();
            dispatch(login(username))
          }
         
        }>
            <input 
            type="text"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            />

            <input type="submit"/>
        </form>
      )
    }
   </>
  )
}

export default App