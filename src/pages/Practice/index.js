import React, { useEffect } from 'react'
import Main from 'shared/Layout/Main'
import TypingArea from 'modules/TypingArea'
import { getLesson } from 'api/lessons'
import { getLetterObject } from './utils'

const Practice = props => {
  const {
    match: { params },
  } = props
  const [tokens, setTokens] = React.useState([])

  useEffect(() => {
    // TODO make real api call
    const lesson = getLesson(params.id)

    const newTokens = lesson.split(' ').map(word => ({
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
