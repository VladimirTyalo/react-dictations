import { SYMBOL_STATUS } from 'components/TypingArea/constants'

export const getLetterObject = (letter, status = SYMBOL_STATUS.HIDDEN) => ({
  status,
  id: Math.random() * 1000000,
  name: letter,
})
