import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext'

function Home() {
    const{auth} = useContext(authContext)
  return (
    <div style={{margin:"20px auto"}}>
        token:{auth.token}
    </div>
  )
}

export default Home