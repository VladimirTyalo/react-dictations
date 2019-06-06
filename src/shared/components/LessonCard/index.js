import React from 'react'
import { TiPen } from 'react-icons/ti'

import NavLink from 'react-router-dom/es/NavLink'
import styles from './styles.module.scss'

const LessonCard = ({ index, id, icon, description }) => {
  return (
    <NavLink to={`/practice_list/${id}`}>
      <div className={`${styles.lessonCard}`}>
        <span className={styles.serialNumber}>{index}</span>
        <span className={styles.icon}>
          <TiPen size={50} color={'#7D6548'} />
        </span>
        <span className={styles.description}>{description}</span>
      </div>
    </NavLink>
  )
}

LessonCard.defaultProps = {
  onClick: () => {},
}

export default LessonCard
