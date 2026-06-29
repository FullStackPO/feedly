import React from 'react'
import "../styles/nav.scss"
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav>
        <p>FeedLy</p>
        <button
        onClick={()=>{navigate('/create')}}
        >New Post</button>
    </nav>
  )
}

export default Navbar
