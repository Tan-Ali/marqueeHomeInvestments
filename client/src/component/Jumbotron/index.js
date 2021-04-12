import React, { Component } from 'react';
import logo from '../img/marquee1.jpg';
import './style.css';

class Jumbotron extends Component {


  render() {
    return (
      <div class="row" id="jumbotron">
        <div class="col">
          <div class="row">
            <div class="col-12 col-md-6 text-center pt-3">
              <img id="jumbo-logo" src={logo} alt="Marquee Homes Logo" width="50px" height="50"/>
            </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Jumbotron;