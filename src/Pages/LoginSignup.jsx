import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
              <input type="text" placeholder=''/>
              <input type="email" placeholder=''/>
              <input type="password" placeholder=''/>
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
              Already have an account?
              <span>Login</span>      
          </p>
          <div className="loginsignup-agree">
              <input type="checkbox" name=' ' id=''/>
              <p>By continuing, I agree to the term of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}