import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <header className="header">
      <Link to='/'>{title}</Link>
    </header>
  );
}

export default Header;