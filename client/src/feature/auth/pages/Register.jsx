import React from 'react'
import '../styles/form.scss'

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <form>
          <div>
            <h1>Register</h1>

            <label htmlFor="name">Name</label>
            <input 
            id='name'
            type="text"
            placeholder='Enter Full Name' 
            name='name'
            required />

            <label htmlFor="contact">Contact</label>
            <input 
            id='contact'
            type="text"
            placeholder='Enter Contact Number' 
            name='contact'
            required />

            <label htmlFor="email">Email</label>
            <input 
            id='email'
            type="text"
            placeholder='Enter email' 
            name='email'
            required />

            <label htmlFor="username">Username</label>
            <input 
            id='username'
            type="text"
            placeholder='Enter username' 
            name='username'
            required />

            <label htmlFor="password">Password</label>
            <input 
            id='password'
            type="password"
            placeholder='Enter password' 
            name='password'
            required />

            <label htmlFor='bio'>bio</label>
            <input 
            id='bio'
            type="text"
            placeholder='Enter bio' 
            name='bio'
            />

            <label htmlFor="pic">Profile Pic</label>
            <input
            id='pic'
            type = 'text'
            placeholder= 'Enter Image URL'
            name='pic'
            />

            <button>Submit</button>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Register
