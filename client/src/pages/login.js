import React from 'react'


const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Deyaa Chat</span>
        <span className="title">Login</span>
        <form>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Sign in</button>
        <p>You don't have an account? Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login;