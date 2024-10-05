import React, { useState } from 'react'

function UserForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <>
    <h3 style={{marginBottom: "30px"}}>Create a form that takes user input and display it in real-time</h3>

    <form>
        <input type="text" name="usename" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" name="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </form>

    <p>
        Username : {username}
    </p>

    <p>
        Password : {password}
    </p>
    </>
  )
}

export default UserForm