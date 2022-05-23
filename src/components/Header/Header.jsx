import React from 'react';
import logo from './../../logo.svg';
import style from './../Header/Header.module.css'

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logos" />
      <p>HEADER</p>
    </header>
  )
}

export default Header;
