import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div>
        <img
          src='./logo.svg'
          alt='logo'
          height='360'
          // width="100"
        />
        <h3>practise your drawing skills trying to beat the clock</h3>
        <button className='btn cta bg'>
          <Link to='/signup'>Sign Up</Link>
        </button>
        <button className='btn cta bg'>
          <Link to='/login'>Log In</Link>
        </button>
      </div>
    );
  }
}
