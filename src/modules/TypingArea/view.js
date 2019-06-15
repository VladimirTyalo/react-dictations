import React from 'react'
import PropTypes from 'prop-types'
import Token from './Token/view'
import styles from './styles.module.scss'

const TypingArea = ({ tokens, activeTokenIndex, activeSymbolIndex }) => {
  return (
    <div className={styles.tokens}>
      {tokens.map((t, tIndex) => (
        <div key={t.id} className={styles.token}>
          {t.symbols.map((s, sIndex) => (
            <Token
              key={s.id}
              isActive={activeSymbolIndex === sIndex && activeTokenIndex === tIndex}
              status={s.status}
              name={s.name}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const { oneOfType, arrayOf, shape, string, number } = PropTypes

TypingArea.propTypes = {
  activeTokenIndex: number,
  activeSymbolIndex: number,
  tokens: arrayOf(
    shape({
      id: oneOfType(string, number),
      symbols: arrayOf(
        shape({
          id: oneOfType(string, number),
          name: string,
          status: string,
        })
      ),
    })
  ),
}

TypingArea.defaultProps = {
  activeTokenIndex: 0,
  activeSymbolIndex: 0,
  tokens: [],
}

export default TypingArea
