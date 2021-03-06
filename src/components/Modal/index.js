import React from 'react'
import { Times } from '../Icons'
import styles from './index.module.css'

const Modal = ({ children, title = 'Modal title', description = 'Modal description', setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleModalInteraction = e => {
    e.stopPropagation()
  }

  return (
    <div onClick={handleCloseModal} className={styles.modalWrapper}>
      <div onClick={handleModalInteraction} className={styles.modalContainer}>
        <button onClick={handleCloseModal} className={styles.timesButton}>
          <Times className={styles.timesIcon} width={21} height={21} />
        </button>
        <div>
          <h3 className={styles.modalTitle}>{title}</h3>
          <p className={styles.modalDescription}>{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
