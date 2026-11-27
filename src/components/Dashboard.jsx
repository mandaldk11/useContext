import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext.js'
function Dashboard() {
  const {user}=useContext(UserContext)
  return (
    <div>
      <h1>hello from Dashboard-{user}</h1>
    </div>
  )
}

export default Dashboard
