import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="./home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;