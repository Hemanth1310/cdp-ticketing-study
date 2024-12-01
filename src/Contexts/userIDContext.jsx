import { createContext, useState } from "react";

export const UserIDContext = createContext()

const UserIDContextProvider = (props) => {
    const [newUID,setNewUID]= useState('');
    
    const handleNewUser = (val) =>{
        setNewUID(val);
        console.log('context-update'+newUID)
    }
    return(
        <UserIDContext.Provider value={{newUID,handleNewUser}}>
            {props.children}
        </UserIDContext.Provider>
    )
}

export default UserIDContextProvider