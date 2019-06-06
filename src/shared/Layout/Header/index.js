import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <nav className={styles.navigation}>
      <a href="" className={styles.logo}>
        Logo
      </a>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink to="/practice_list" activeClassName={styles.active}>
            List
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/statistics" activeClassName={styles.active}>
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
