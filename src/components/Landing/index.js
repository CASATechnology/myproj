import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import * as routes from '../../constants/routes';

import '../../App.css';

const LandingPage = () =>
  <div>
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> CASA Technologies Inc.</h1>
        </header>
        <p className="App-intro">
          Welcome To StudentsIn.<br></br>
          Please Create your profile to start!<br></br>
          
          <Link to={routes.About}>About CASA Technologies</Link>
        </p>
        
       
  </div>

export default LandingPage;