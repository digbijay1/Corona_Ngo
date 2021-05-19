import React from 'react'
import {Link} from "react-router-dom";
function Nav() {
    return (
      <nav>
        <h3>logo</h3>
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/AssociateNgo">
            <li>AssociateNgo</li>
          </Link>
          <Link to="/ContactPage">
            <li>ContactPage</li>
          </Link>
          <Link to="/covidhelp">
            <li>CovidHelp</li>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav
