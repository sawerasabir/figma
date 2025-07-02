import React from 'react';
import LoginSignUpPage from './components/LoginSignupPage';
import ForgotForm from './Forgot Password/ForgotForm';

import './App.css';



function App() {
  return (
    <div className="container ">
      <div className="left-pane"></div>
      <div className="signup-wrapper">
        <LoginSignUpPage/>
      </div>
       <div className="left-pane"></div>
      <div className="login-wrapper">
     
        <div className="left-pane"></div>
      <div className="login-wrapper"></div>
  
      </div>
    </div>
  );
}

export default App;
