import React from 'react';

import { Link } from 'react-router-dom';

import SearchInput from './../SearchInput';

import './style.scss';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product/abc">Product abc</Link>
      <SearchInput />
    </nav>
  );
}
