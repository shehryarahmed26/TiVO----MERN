import React, { createContext, useEffect, useState } from 'react'
export const Authcontext = createContext()
const Authprovider = ({children}) => {
    const [user, setuser] = useState('')
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setuser(JSON.parse(storedUser));
      }
  }, []);
  return (
    <Authcontext.Provider value={{user, setuser}}>
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovider