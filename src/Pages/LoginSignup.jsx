import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Continue</button>
          <p className='have'>
            Already have an account? <span>Login here</span>
          </p>
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>By continuing, I agree to the <span>terms of use</span> & <span>privacy policy</span>.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
