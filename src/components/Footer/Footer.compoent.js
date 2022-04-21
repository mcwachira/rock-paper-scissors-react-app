import React, { useState } from 'react'
import Modal from '../Modal/Modal.component'
import classes from './Footer.module.css'

const Footer = () => {

    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
        console.log('click')
    }
    return (
        <>
            <footer className={classes.footer}>
                <p>

                    Coded By mcwachira
                </p>
                <button className={classes.rules} onClick={toggle}>

                    Rules
                </button>

            </footer>
            {modal ? <Modal toggle={toggle} /> : null}

        </>

    )
}

export default Footer;