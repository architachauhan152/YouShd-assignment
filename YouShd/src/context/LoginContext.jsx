import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const [token,setToken] = useState(null);

    const isLogin = () =>{
        if(token=='ritu'){
            setToken('');
        }
    }

    const value = {
        token,
        isLogin,
        setToken
    }

  return <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
}
