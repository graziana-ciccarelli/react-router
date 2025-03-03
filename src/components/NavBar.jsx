import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/chi-siamo">Chi Siamo</Link></li>  
        <li><Link to="/post-list">Lista Post</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;