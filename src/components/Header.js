import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-0">
          <NavBar/>
          <h1 className="p-3">React - Mandatory Assignment</h1>
        </div>
      </div>
    );
  }
}

export default Header;