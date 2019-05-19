import React from 'react'
import PropTypes from 'prop-types'
import Token from './Token/view'
import styles from './styles.module.scss'
import { SYMBOL_STATUS } from './constants'

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
      symbols: shape({
        id: string,
        name: string,
        status: string,
      }),
    })
  ),
}

TypingArea.defaultProps = {
  activeTokenIndex: 0,
  activeSymbolIndex: 0,
  tokens: [...Array(20)].map(t => ({
    id: Math.random() * 1000,
    symbols: [...Array(5)]
      .map(s => ({
        id: Math.random() * 1000,
        name: String.fromCharCode((97 + Math.random() * 26) | 0),
        status: [SYMBOL_STATUS.ERROR, SYMBOL_STATUS.HIDDEN, SYMBOL_STATUS.OK][(Math.random() * 3) | 0],
      }))
      .concat([
        {
          id: 'empty',
          name: ' ',
        },
      ]),
  })),
}

export default TypingArea
