import React, { useEffect, useReducer, useMemo } from 'react'
import { withRouter } from 'react-router-dom'
import compose from 'ramda/src/compose'
import { useKeyboard } from 'hooks/useKeyboard'
import path from 'ramda/src/path'
import { typingAreaReducer } from './reducer'
import { actionDeleteSymbol, actionTypeSymbol, initialState } from './constants'

const withState = Component => {
  return props => {
    const id = path(['match', 'params', 'id'], props)
    const { key, clear, COMMANDS, uid } = useKeyboard()

    const [{ tokens, currentTokenIndex, currentSymbolIndex }, dispatch] = useReducer(typingAreaReducer, initialState)
    const lastToken = useMemo(() => tokens.slice(-1)[0], [tokens])

    const onChangeSymbol = () => {
      if (key === COMMANDS.Enter) {
        // TODO handle space or enter

        return
      }

      if (key === COMMANDS.Backspace) {
        if (currentTokenIndex === 0 && currentSymbolIndex === 0) return
        dispatch(actionDeleteSymbol(currentTokenIndex, currentSymbolIndex))

        return
      }

      if (key) {
        if (currentTokenIndex === tokens.length - 1 && currentSymbolIndex === lastToken.symbols.length - 1) {
          // TODO add logic to show results
          return
        }
        dispatch(actionTypeSymbol(currentTokenIndex, currentSymbolIndex, key))
      }
    }

    useEffect(() => {
      // TODO load text by id
    }, [id])

    useEffect(() => {
      onChangeSymbol()
    }, [uid])

    return <Component tokens={tokens} activeTokenIndex={currentTokenIndex} activeSymbolIndex={currentSymbolIndex} />
  }
}

export default compose(
  withRouter,
  withState
)
