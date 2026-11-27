import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext.js'
function Profile() {
  const {user}=useContext(UserContext)
  return (
    <div>
      <h1>Profile-{user}</h1>
    </div>
  )
}

export default Profile
