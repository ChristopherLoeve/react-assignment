import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg" >
        <nav className="nav navbar-nav">
          <Link to='/' className="nav-item nav-link">Characters</Link>
          <Link to='/About' className="nav-item nav-link">About</Link>
          <Link to='/Admin' className="nav-item nav-link">Admin</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;