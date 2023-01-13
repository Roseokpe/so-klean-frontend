import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div>
      <form>
        <h3>signup here</h3>
        <label htmlFor="email">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="button">sign up</button>
      </form>
    </div>

  );
}

export default Signup;
