import React from 'react'
import Main from 'shared/Layout/Main'
import LessonCard from 'shared/components/LessonCard'
import styles from './styles.module.scss'

const PracticeList = ({
  items = [...Array(22)].map(i => ({ id: (Math.random() * 1000).toFixed(2), description: ' som desk' })),
}) => {
  return (
    <Main>
      {items.map((item, index) => (
        <div className={styles.cardWrapper} key={item.id}>
          <LessonCard index={index} id={item.id} description={item.description} />
        </div>
      ))}
    </Main>
  )
}

export default PracticeList
