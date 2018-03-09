import React, { Component } from 'react';
import Chetan from '../../Chetan.jpg';
import Anubhav from '../../Anubhav.jpg';
import Shashin from '../../Shashin.jpg';
import Anand from '../../Anand.JPG';

export default class AboutPage extends Component{
    render(){
        return(
            <div>
        <img src={Chetan} className="App-logo-team" alt="logo" /><br></br>
        Chetan - A technology expert in all technology<br></br>
        <img src={Anubhav} className="App-logo-team" alt="logo" /><br></br>
        Anubhav - A Superman. expert in all technology<br></br>
        <img src={Shashin} className="App-logo-team" alt="logo" /><br></br>
        Shashin - A technology evangilist<br></br>
        <img src={Anand} className="App-logo-team" alt="logo" /><br></br>
        Anand - A technology expert in all technology<br></br>
      </div>
        );
    }
}