import { useRef, useEffect } from 'react'

export const useKeyboardAudio = url => {
  const keyPress = () => {
    let audio = new Audio(url)
    audio.onended = () => {
      audio = null
    }

    audio.play()
  }
  return { keyPress }
}
