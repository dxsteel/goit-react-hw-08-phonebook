import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'



const activeLink = {
  color: '#E84A5F',
};


export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        // exact
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        SIGN UP
      </NavLink>
      <NavLink
        to="/login"
        // exact
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        LOG IN
      </NavLink>
    </div>
  );
}