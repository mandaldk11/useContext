import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext.js'
import Profile from './Profile.jsx'
import Dashboard from './Dashboard.jsx'
function Login() {
  const [username,setusername]=useState("")
  // step-03- grab the state using useContext hook
 const {setUser}= useContext(UserContext)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser(username)

  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" name='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <button onClick={handleSubmit}>Submit</button>
      <Profile/>
      <Dashboard/>
    </div>
  )
}

export default Login
