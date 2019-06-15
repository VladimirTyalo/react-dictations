import React from 'react'
import styles from './styles.module.scss'

const StartMessage = ({ title, timeLeft }) => {
  return (
    <div className={styles.messageContainer}>
      <span>The game will start in: </span>
      <span className={styles.time}>{timeLeft}</span>
      <span>seconds</span>
    </div>
  )
}

export default StartMessage
