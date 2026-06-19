import React, {useState} from 'react'
import '../styles/form.scss'
import axios from 'axios'
import { Link } from 'react-router'

const Register = () => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async(e) => {
      e.preventDefault()

  const res = await axios.post('http://localhost:3000/api/auth/register', {
      name,
      contact,
      email,
      username,
      password
    },
    {
      withCredentials : true
    })

  console.log(res.data)
  }


  return (
    <main>
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div>
            <h1>Register</h1>

            <label htmlFor="name">Name</label>
            <input 
            onInput={(e) => {setName(e.target.value)}}
            id='name'
            type="text"
            placeholder='Enter Full Name' 
            name='name'
            required />

            <label htmlFor="contact">Contact</label>
            <input 
            onInput={(e) => {setContact(e.target.value)}}
            id='contact'
            type="text"
            placeholder='Enter Contact Number' 
            name='contact'
            required />

            <label htmlFor="email">Email</label>
            <input 
            onInput={(e) => {setEmail(e.target.value)}}
            id='email'
            type="text"
            placeholder='Enter email' 
            name='email'
            required />

            <label htmlFor="username">Username</label>
            <input 
            onInput={(e) => {setUsername(e.target.value)}}
            id='username'
            type="text"
            placeholder='Enter username' 
            name='username'
            required />

            <label htmlFor="password">Password</label>
            <input 
            onInput={(e) => {setPassword(e.target.value)}}
            id='password'
            type="password"
            placeholder='Enter password' 
            name='password'
            required />

            <button>Submit</button>

            <p>Have an account ? <Link to='/login'>Login</Link></p>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Register
