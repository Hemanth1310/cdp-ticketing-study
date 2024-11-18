import React,{createContext, useState} from "react";

export const SecondPartFlag = createContext();


const SecondPartFlagProvider =(props)=>{
    const [spflagger,setSPFlagger] = useState(false)

    const handleSecondPartFlag=(val)=>{
        setSPFlagger(val)

    }
    return(
        <SecondPartFlag.Provider value={{spflagger,handleSecondPartFlag}}>
            {props.children}
        </SecondPartFlag.Provider>
    )
}

export default SecondPartFlagProvider