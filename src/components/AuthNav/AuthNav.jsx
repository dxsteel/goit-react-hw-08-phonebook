import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const activeLink = {
  color: '#0AA700',
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        SIGN UP
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        LOG IN
      </NavLink>
    </div>
  );
}
