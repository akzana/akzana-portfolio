import React from 'react';
import "./Nav.scss";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">Home</li>
          <li className="nav__li">About</li>
          <li className="nav__li">Resume</li>
        </ul>
      </nav>
    </div>
  )
}
