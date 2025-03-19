import React from 'react'
import "./Css/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name"/>
          <input type="email"placeholder="email address"/>
          <input type="password" placeholder="password"/> 

        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
