import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.module.scss'

const SYMBOL_STATUS = {
  HIDDEN: 'HIDDEN',
  ERROR: 'ERROR',
  OK: 'OK',
}

const TypingArea = ({ tokens, activeSymbolId, ...rest }) => {
  return (
    <div className={styles.tokens}>
      {tokens.map(t => (
        <div key={t.id} className={styles.token}>
          {t.symbols.map(s => (
            <React.Fragment key={s.id}>
              <span
                className={cx({
                  [styles.symbol]: true,
                  [styles.active]: true,
                  [styles.ok]: s.status === SYMBOL_STATUS.OK,
                  [styles.error]: s.status === SYMBOL_STATUS.ERROR,
                  [styles.hidden]: s.status === SYMBOL_STATUS.HIDDEN,
                })}
              >
                {s.name}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

const { oneOfType, arrayOf, shape, string, number } = PropTypes

TypingArea.propTypes = {
  tokes: arrayOf(
    shape({
      id: oneOfType(string, number),
      symbols: shape({
        id: string,
        name: string,
        status: string, // hidden, error, ok, nonTouched
      }),
    })
  ),
}

TypingArea.defaultProps = {
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
