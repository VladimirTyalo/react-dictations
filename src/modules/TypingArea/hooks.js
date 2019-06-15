import { useEffect, useReducer, useMemo } from 'react'
import { useKeyboard } from 'shared/hooks/useKeyboard'
import { useKeyboardAudio } from 'shared/hooks/useKeyboardAudio'
import path from 'ramda/src/path'
import { typingAreaReducer } from './reducer'
import { actionDeleteSymbol, actionTypeSymbol, actionResetText } from './constants'

export const useTypingAreaHook = props => {
  const id = path(['match', 'params', 'id'], props)
  const { key, clear, COMMANDS, uid } = useKeyboard()
  const { keyPress: correctKeyPress } = useKeyboardAudio(`${process.env.PUBLIC_URL}/keyboard-click.mp3`)
  const { keyPress: errorKeyPress } = useKeyboardAudio(`${process.env.PUBLIC_URL}/error-click.mp3`)

  const [state, dispatch] = useReducer(typingAreaReducer, {})

  const { tokens = [], currentTokenIndex, currentSymbolIndex } = state

  const lastToken = useMemo(() => tokens.slice(-1)[0], [tokens])

  const isValidSymbolPressed = pressedKey => tokens[currentTokenIndex].symbols[currentSymbolIndex].name === pressedKey

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

      if (isValidSymbolPressed(key)) {
        correctKeyPress()
      } else {
        // errorKeyPress()
      }

      dispatch(actionTypeSymbol(currentTokenIndex, currentSymbolIndex, key))
    }
  }

  useEffect(() => {
    onChangeSymbol()
  }, [uid])

  useEffect(() => {
    dispatch(actionResetText(props.tokens))
  }, [props.tokens])

  return {
    tokens,
    currentTokenIndex,
    currentSymbolIndex,
  }
}
