import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) 
{
    const[user,setUser]=useState( {sname:'Alice'} )	
    let fruit="Apple";
    let car="Audi"
    let number=10;
    
    let sharedData = { user, fruit, car, setUser };         
  return (
   
   <UserContext.Provider value={sharedData}>		
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
