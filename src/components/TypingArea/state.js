import React, { useEffect, useReducer } from 'react'
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

    const onChangeSymbol = () => {
      if (key === COMMANDS.Enter) {
        // TODO handle space or enter

        return
      }

      if (key === COMMANDS.Backspace) {
        dispatch(actionDeleteSymbol(currentTokenIndex, currentSymbolIndex))

        return
      }

      if (key) {
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
