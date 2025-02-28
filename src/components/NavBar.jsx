import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ChiSiamo">Chi Siamo</Link></li>
        <li><Link to="/PostList">Lista Post</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
