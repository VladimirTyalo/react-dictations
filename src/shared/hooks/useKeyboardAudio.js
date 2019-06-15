import { useRef, useEffect } from 'react'

const restartPlay = audio => {
  audio.pause()
  audio.currentTime = 0
  audio.play()
}

export const useKeyboardAudio = url => {
  const audio = useRef()

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio(url)
    }
  }, [url])

  return { keyPress: () => restartPlay(audio.current) }
}
