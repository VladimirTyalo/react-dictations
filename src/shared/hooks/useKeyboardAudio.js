import { useRef, useEffect } from 'react'

const restartPlay = audio => {
  audio.pause()
  audio.currentTime = 0
  audio.play()
}

// TODO добавить дебаунс с использованием rxjs
export const useKeyboardAudio = url => {
  const audio = useRef()

  const keyPress = () => restartPlay(audio.current)

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio(url)
    }
  }, [url])

  return { keyPress }
}
