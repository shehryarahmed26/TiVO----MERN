import React, { createContext, useState } from 'react'
export const Authcontext = createContext()
const Authprovider = ({children}) => {
    const [user, setuser] = useState('hello world')
  return (
    <Authcontext.Provider value={{user, setuser}}>
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovider