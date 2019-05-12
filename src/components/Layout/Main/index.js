import React from 'react'
import styles from './styles.module.scss'

const Main = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Main
