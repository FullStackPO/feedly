import React, { useState } from 'react'
import { Link } from 'react-router'
import '../styles/form.scss'
import axios from 'axios'
import { useAuth } from '../hooks/auth.hook'
import { useNavigate } from 'react-router'

const Login = () => {

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const { user, handleLogin, loading } = useAuth()
  const navigate = useNavigate()

  if(loading){
    return(
      <h1>Loading....</h1>
    )
  }

  const submitHandler = async(e) => {
    e.preventDefault()

    let res = await handleLogin(username,password)
    navigate('/')

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

                <button>Login</button>

                <p>Don't have an account ? <Link to='/register'>Register</Link></p>
            </div>
        </form>
      </div>
    </main> 
  )
}

export default Login
