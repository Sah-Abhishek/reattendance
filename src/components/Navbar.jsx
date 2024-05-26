import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    
  return (
    <div>
        <Link to="/">Home</Link> <br />
        <Link to="/login">Login</Link><br />
        <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar