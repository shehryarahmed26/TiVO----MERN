import React, { useEffect, useState } from 'react'
import UserRow from '../Userrow/UserRow'

const Userssection = () => {
    const [allusers, setallusers] = useState([])
    const getusers = async () => {
        let users = await fetch(`https://blogging-app-mern.vercel.app/api/auth/register`)
        users = await users.json()
        setallusers(users.users)        
        
    }
    useEffect(() => {
        getusers()
        console.log(allusers);

    }, []) 
  return (
    <div>
        {
            allusers.map((user) => (
                <UserRow user={user}/>
            ))
        }
    </div>
  )
}

export default Userssection