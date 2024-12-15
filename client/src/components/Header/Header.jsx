import React from 'react';
import "./Header.scss";
import Nav from './Nav/Nav.jsx';
import Logo from './Logo/Logo.jsx';

export default function Header() {
  return (
    <div>
      <Logo/>
      <Nav/>
    </div>
  )
}
