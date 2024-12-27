import React from 'react'
import s from './Modal.module.scss'
import Button from '../../Button/Button'

const Modal = ({isModalOpen, onClose}) => {
  return (
    <>
    <div  className={`${s.modul} ${isModalOpen ? s.active : ''}`}>
        <div className={s.box}>
            <h2>Привет я модалка</h2>
            <p>Текст</p>
            <div onClick={onClose}>
            <Button >Закрыть</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal