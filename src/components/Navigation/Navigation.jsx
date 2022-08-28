import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import styles from './Navigation.module.css';

const activeLink = {
  color: '#0766FF',
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.link}
          style={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
