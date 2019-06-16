import React from 'react'
import { interval } from 'rxjs'
import { take, scan, map } from 'rxjs/operators'
import { toProps, useRefract, toRender } from 'refract-rxjs'
import StartMessage from './view'

const aperture = (component, { time = 10 }) =>
  interval(1000).pipe(
    take(time),
    scan(acc => acc - 1, time),
    map(timeLeft => toRender(timeLeft))
  )

export default ({ time }) => {
  const timeLeft = useRefract(aperture, { time })

  return <StartMessage time={timeLeft} isEmpty={timeLeft <= 0} />
}
