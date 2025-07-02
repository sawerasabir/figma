import React, { useState } from 'react';
import './Forgot.css';

const ForgotForm = ({ onSwitch }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSendLink = () => {
    // simulate API call
    if (email.trim()) {
      setEmailSent(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="forgot-panel">
        <div className="forgot-card">
          {!emailSent ? (
            <>
              <div className="icon-circle">🔑</div>
              <h2>Forgot password</h2>
              <p>Enter the email associated with your account
                 and we’ll send you a link to reset your password</p>
                 <br></br>
              email
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br/>
              <button className="send-btn" onClick={handleSendLink}>Send Link</button>

              <p className="signup-redirect">
                Don’t have an account?
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  onSwitch('signup');
                }}> Sign up</a>
              </p>
            </>
          ) : (
            <>
              <div className="icon-circle">📩</div>
              <h2>Check your email</h2>
              <p>We sent a password reset link to<br /><strong>{email}</strong></p>
              <button className="send-btn" onClick={() => onSwitch('signup')}>Back to login</button>
              <p className="signup-redirect">
                Don’t receive the email? <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleSendLink(); // simulate resend
                }}>Click to resend</a>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Optional preview panel as in your design */}
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
      </div>
  )
};

export default ForgotForm;
