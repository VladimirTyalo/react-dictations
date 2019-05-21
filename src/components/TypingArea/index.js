import React from 'react'
import compose from 'ramda/src/compose'
import { withRouter } from 'react-router-dom'
import View from './view'
import { useTypingAreaHook } from './hooks'

const withState = props => Component => {
  const { tokens, currentTokenIndex, currentSymbolIndex } = useTypingAreaHook(props)
  console.log('props', props)
  return (
    <Component {...props} tokens={tokens} activeTokenIndex={currentTokenIndex} activeSymbolIndex={currentSymbolIndex} />
  )
}

export default props => withState(props)(View)
