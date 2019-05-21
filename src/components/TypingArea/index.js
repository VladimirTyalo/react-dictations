import React from 'react'
import { withRouter } from 'react-router-dom'
import View from './view'
import { useTypingAreaHook } from './hooks'

const withState = props => Component => {
  const { tokens, currentTokenIndex, currentSymbolIndex } = useTypingAreaHook(props)

  return <Component tokens={tokens} activeTokenIndex={currentTokenIndex} activeSymbolIndex={currentSymbolIndex} />
}

export default withRouter(props => withState(props)(View))
