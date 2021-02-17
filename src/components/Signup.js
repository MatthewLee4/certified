import React from 'react'
import './Signup.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

function Signup() {
    return (
        <div className="page-wrapper">
        <div class='row'>
      <div class='column'>
        <div class='blue-column'>
          <h1>Welcome to Certified</h1>
        </div>
      </div>
      <div class='column'>
        <div class='green-column'>
         <h4>Start For Free</h4>
         <h2>Sign up to be Certified</h2>
         <h5>Already a Member? Log in</h5>

         <form>
         <label>
            Name
        <input type="text" name="name" placeholder="name"/>
        </label>
         <label>
            E-Mail
        <input type="text" name="e-mail" placeholder="name@mail.com"/>
        </label>
        <label>
            Password
        <input type="text" name="password" placeholder="6+ Chars, 1 Capital, 1 Number" />
        </label>
        <Button variant="contained" color="primary" type="submit" value ="Submit">
            Create Account
        </Button>
        </form>
        <FontAwesomeIcon icon={faGithubAlt} size='3x'/>
        <FontAwesomeIcon icon={faGoogle} size='3x'/>
        <FontAwesomeIcon icon={faFacebook} size='3x'/>
        <FontAwesomeIcon icon={faTwitter} size='3x'/>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Signup
