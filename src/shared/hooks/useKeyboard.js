import { useEffect, useState } from 'react'

const COMMANDS = { Enter: 'Enter', Backspace: 'Backspace', Escape: 'Escape' }

export const useKeyboard = () => {
  const [key, setKey] = useState('')
  // in order to distinguish between keyboard events for useEffect hook - provide uid
  const [uid, setUid] = useState(Symbol('some random symbol'))

  const onKeyPress = ev => {
    setKey(ev.key)
    setUid(Symbol('next uid'))
  }

  const onKeyDown = ev => {
    if (ev.key === 'Backspace' || ev.key === 'Enter' || ev.key === 'Escape') {
      setKey(ev.key)
      setUid(Symbol('next uid'))
    }
  }

  const clear = () => {
    window.removeEventListener('keypress', onKeyPress)
    window.removeEventListener('keyDown', onKeyDown)
  }

  useEffect(() => {
    window.addEventListener('keypress', onKeyPress)
    window.addEventListener('keydown', onKeyDown)

    return clear
  }, [])

  return { key, clear, COMMANDS, uid }
}
