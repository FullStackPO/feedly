import React from 'react'
import '../styles/form.scss'

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <form>
            <div>
                <h1>Login</h1>
                <label htmlFor="username">Username or Email</label>
                <input id='username' type="text" placeholder='Enter UserId' name='username' required/>
                <label htmlFor="password">Password</label>
                <input id='password' type='password' placeholder='Enter password' name='password' required/>
                <button>Submit</button>
            </div>
        </form>
      </div>
    </main> 
  )
}

export default Login
