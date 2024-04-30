import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
       <div className="container">
    <div className="left">
      <h1>Hello world.</h1>
      <p>Welcome to PunkSocial. Where you can connect 
        with friends and people from all around the 
        world.</p>
      <span>Do you have an account? </span>
      <Link to='/login'>
      <button>Login</button>
      </Link>
      
    </div>
    <div className="right">
      <h1>Register.</h1>
      <form >
        <input type="text" placeholder='username' />
        <input type="mail" placeholder='email' />
        <input type="password" placeholder='password' />
      </form>
      <button>Register</button>
    </div>
  </div>
    </div>
  )
}

export default Register