import React, { useState } from 'react';
import './LoginForm.css';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import Forgot from '../Forgot Password/ForgotForm';

export function SignUpForm({ onSwitch }) {
  return (
    <div className="left-pane">
      <div className="signup-box card-style">
        <div className="logo">
          <img src="/lo.png" alt="Lo" />
        </div>
        <h2>Sign up</h2>

        <form className="signup-form">
          <label>Full Name*</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email*</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="••••••" />
          <small>Must be at least 5 characters</small>

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••" />

          <div className="checkbox">
            <input type="checkbox" />
            <span>
              By creating an account you’re agreeing to our
              <a href="#"> Terms of Service </a> and <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p className="or-text">Or sign up with</p>
        <div className="social-icons">
           <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
            <img src="https://img.icons8.com/ios-filled/48/mac-os.png" alt="Apple" />
          </div>
        <div className="login-link">
          Already have an account? <a href="#" onClick={onSwitch}>Login</a>
        </div>
      </div>
    </div>
  );
}

export function LoginForm({ onSwitch, onForgot }) {
  return (
    <div className="left-pane">
      <div className="login-box card-style">
        <div className="logo">
          <img src="/lo.png" alt="Lo" />
        </div>
        <h2>Welcome back</h2>
        <p className="subtitle">Please enter your details.</p>

        <form className="login-form">
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Password" required />

          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" />
              Save info
            </label>
            <a
              href="#"
              className="forgot-link"
              onClick={(e) => {
                e.preventDefault();
                onForgot();
              }}
            >
              Forgot password
            </a>
          </div>

          <button type="submit">Login</button>

          <div className="or-text">Or login with</div>
          <div className="social-icons">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
            <img src="https://img.icons8.com/ios-filled/48/mac-os.png" alt="Apple" />
          </div>

          <div className="signup-link">
            Don’t have an account? <a href="#" onClick={onSwitch}>Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SignupLoginPage() {
  const [view, setView] = useState('login'); // 'login' | 'signup' | 'forgot'

  return (
    <div className="container">
      <div className="pane-wrapper">
        {view === 'login' && (
          <LoginForm
            onSwitch={() => setView('signup')}
            onForgot={() => setView('forgot')} // ✅ Fixed here
          />
        )}

        {view === 'signup' && (
          <SignUpForm onSwitch={() => setView('login')} />
        )}

        {view === 'forgot' && (
          <Forgot onSwitch={() => setView('login')} />
        )}
        

        {view !== 'forgot' && ( // ✅ Hide right pane when in forgot view
          <div className="right-pane">
            <div className="login-code card-style">
              📩 Your login code is <strong>XJH4</strong>
            </div>

            <div className="user-info card-style">
              <img src="/image.png" alt="User" />
              <div>
                <div className="name">Vanessa L.</div>
                <div className="email">vanes@acme.com</div>
              </div>
            </div>

            <div className="login-card card-style">
              <input type="email" placeholder="john.doe@gmail.com" />
              <div className="code-box">
                <input type="password" placeholder="0----" />
              </div>
              <button>Log in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
