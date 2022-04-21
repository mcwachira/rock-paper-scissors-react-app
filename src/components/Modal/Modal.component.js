import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import CloseButton from '../../assets/icon-close.svg'
import ModalImage from '../../assets/image-rules.svg'

const Modal = ({ toggle }) => {
    return ReactDOM.createPortal(
        <div className={classes.modalContainer}>
            <div className={classes.modalBox}>
                <div className={classes.modalHeader}>

                    <h1>
                        Rules
                    </h1>
                    <button className={classes.close} onClick={toggle}>
                        <img src={CloseButton} alt="close button" />
                    </button>
                </div>

                <img src={ModalImage} alt="modal " />
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal