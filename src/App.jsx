import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setuser] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then(res=>res.json())
    .then(data=>setuser(data))
  },[])

  const handleAdduser = (event)=>{
    event.preventDefault()
    const form = event.target
    const name = event.target.name.value
    const email =  event.target.email.value
    const user = {
      name,email
    }
    console.log(name, email,user)
  }
  return (
    <>
      <h1>Users management system</h1>
      <p>Numbers of user: {users.length}</p>
      <form action="" onSubmit={handleAdduser}>
        <input type="text" name="name"/>
        <br />
        <input type="email" name="email"/>
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {
          users.map(user=><p key={user.id}>{user.id} {user.name}</p>)
        }
      </div>
    </>
  )
}

export default App
