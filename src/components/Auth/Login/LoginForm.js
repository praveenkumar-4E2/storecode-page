import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import InputField from '../../ui/InputField/InputField'

const LoginForm = () => {
  return (
    <div>
      <form >
        <InputField
          type="text"
          placeholder="Enter your email id"
        />
        <InputField
          type="password"
          placeholder="Enter your password"
        />
        <span className='text-right'>
          <Link to="/forgot/password" className='link-color'>Forgot Password?</Link>
        </span>
        <button type="submit" className='sub-btn gradient-background-p' >Login</button>
      </form>
    </div>
  )
}

export default LoginForm