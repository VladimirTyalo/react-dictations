import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from '../styles.module.scss'
import { SYMBOL_STATUS } from '../constants'

const Token = ({ isActive, status, name }) => {
  return (
    <span
      className={cx({
        [styles.symbol]: true,
        [styles.active]: isActive,
        [styles.ok]: status === SYMBOL_STATUS.OK,
        [styles.error]: status === SYMBOL_STATUS.ERROR,
        [styles.errorSpace]: status === SYMBOL_STATUS.ERROR && name === ' ',
        [styles.hidden]: status === SYMBOL_STATUS.HIDDEN,
      })}
    >
      {name}
    </span>
  )
}

Token.propTypes = {
  isActive: PropTypes.bool,
  status: PropTypes.string,
  name: PropTypes.string,
}

export default React.memo(Token)
