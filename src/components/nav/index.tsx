import React from 'react'
import { Link } from "react-router-dom";
import styles from './scss/Nav.module.scss';

function Nav() {
  return (
    <ul className={styles.nav_box}>
      <li className={styles.nav_item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.nav_item}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.nav_item}>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
}

export default Nav;