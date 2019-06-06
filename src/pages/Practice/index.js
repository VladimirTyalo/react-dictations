import React from 'react'
import Main from 'shared/Layout/Main'
import TypingArea from 'modules/TypingArea'
import { getLetterObject } from './utils'

const dummyText = 'hello world and lorem ipsum lets get started'

const Practice = props => {
  const {
    match: { params },
  } = props
  const [tokens, setTokens] = React.useState([])

  React.useEffect(() => {
    // TODO make api call
    const newTokens = dummyText.split(' ').map(word => ({
      id: Math.random() * 100000,
      symbols: word
        .split('')
        .map(letter => getLetterObject(letter))
        .concat(getLetterObject(' ')),
    }))

    setTokens(newTokens)
  }, [params.id])

  return (
    <Main>
      <TypingArea tokens={tokens} />
    </Main>
  )
}

export default Practice
