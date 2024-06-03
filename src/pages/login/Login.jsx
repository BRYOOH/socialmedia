import React, { useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../component/context/AuthContext'


const Login = () => {

const {login} = useContext(AuthContext);
const Handlelogin=()=>{
      login();
};

  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <h1>Hello world.</h1>
          <p>Welcome to PunkSocial. Where you can connect with friends and people from all around the world.</p>
          <span>Don't you have an account? </span>
          
          <Link to='/register'>
          <button>Register</button> 
          </Link>
         
        </div>
        <div className="right">
          <h1>Login.</h1>
          <form >
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
          </form>
          <button onClick={Handlelogin}>Login </button>
        </div>
      </div>

    </div>
  )
}

export default Login