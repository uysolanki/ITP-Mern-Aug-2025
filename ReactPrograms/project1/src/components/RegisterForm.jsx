import React, { useEffect, useState } from 'react'
import './RegisterForm.css'
// import eye from '../../public/myimages/eye.png'
// import hide_eye from '../../public/myimages/hide_eye.png'



const RegisterForm = () => {

    const eye1='/myimages/eye.png'
    const hide1='/myimages/hide_eye.png'

    const u1={
        username:"",
        password:"",
        confirmPassword:""
    }

  const [user,setUser]=useState(u1)
  const [flag,setFlag]=useState(false)
  
  function handleChange(event)
  {
    const {name,value } = event.target
    setUser((prev)=>({...prev,[name]:value}))
    // console.log(user)
  }

  useEffect(
    ()=>{
        console.log(user)
    },[user]
  )

  function handleSubmit(event)
  {
    event.preventDefault();
    alert(`Form submitted for User ${user.username}`)
  }

  function showPassword()
  {
    setFlag(!flag)
  }
  return (
   <>
   <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor='username'> Enter Username</label>
                <input 
                type="text" 
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange}
                />
        </div>
        <div>
                  <label htmlFor='password'> Enter Password</label>
                  <input 
                  type={flag?"text" :"password"}
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  />
                  <button className="show-password" type="button" value="Show Password" onClick={showPassword}>
                  {
                    flag? <img src={eye1}/> : <img src={hide1}/>
                  }
                  
                  </button>
        </div>
        <div>   
                  <label htmlFor='confirmPassword'> Confirm Password</label>
                  <input 
                  type={flag?"text" :"password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange} />
        </div>
        <div>
                  <input 
                  type="submit" 
                  value="REGISTER"
                  disabled={
                    !user.username ||
                    !user.password ||
                    !user.confirmPassword ||
                    user.password !== user.confirmPassword
                  }
                  />
        </div>
   </form>
   </>
  )
}

export default RegisterForm