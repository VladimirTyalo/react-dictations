import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

const StartMessage = ({ time, isEmpty }) => {
  if (isEmpty) return <div className={cx(styles.messageContainer, { [styles.isEmpty]: isEmpty })} />

  return (
    <div className={styles.messageContainer}>
      <span>The game will start in: </span>
      <span className={styles.time}>{time}</span>
      <span> seconds</span>
    </div>
  )
}

export default StartMessage
