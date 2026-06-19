import React, { useState } from 'react'
import { Link } from 'react-router'
import '../styles/form.scss'
import axios from 'axios'

const Login = () => {

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const submitHandler = async(e) => {

    e.preventDefault()

    const res = await axios.post('http://localhost:3000/api/auth/login', {
      username,
      password
    })

    console.log(res.data)
  }

  return (
    <main>
      <div className="form-container">
        <form onSubmit={submitHandler}>
            <div>
                <h1>Login</h1>
                <label htmlFor="username">Username or Email</label>
                <input 
                onInput={(e) => {setUsername(e.target.value)}}
                id='username' 
                type="text" 
                placeholder='Enter UserId' 
                name='username' 
                required/>
                
                <label htmlFor="password">Password</label>
                <input 
                onInput={(e) => {setPassword(e.target.value)}}
                id='password' 
                type='password' 
                placeholder='Enter password' 
                name='password' 
                required/>

                <button>Submit</button>

                <p>Don't have an account ? <Link to='/register'>Register</Link></p>
            </div>
        </form>
      </div>
    </main> 
  )
}

export default Login
