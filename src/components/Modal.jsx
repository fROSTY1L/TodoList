import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Modal = ({setToggleModal}) => {
  return (
    <div className='ModalBg'>
        <div className="ModalContainer">
            <FontAwesomeIcon onClick={setToggleModal} icon={faXmark} color='white'/>
            <h2>Instructions for use</h2>
            <p>1. Enter your task to add to TodoList</p>
            <p>2. To add, click on the add button</p>
            <p>3. To mark a task as completed, click on its text </p>
            <p>4. To edit or delete an item, use the corresponding buttons to the left of it.</p>
        </div>
    </div>
  )
}

export default Modal
