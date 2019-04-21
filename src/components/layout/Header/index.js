import React from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/practice/2" activeClassName={styles.active}>
              Practice
            </NavLink>
          </li>
          <li>
            <NavLink to="/practice_list" activeClassName={styles.active}>
              List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
