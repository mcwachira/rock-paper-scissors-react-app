import React, { useState } from 'react'

import './Layout.module.css'

import Header from '../Header/Header.component'
import Modal from '../Modal/Modal.component'
import Board from '../Board/Board.component'
import Game from '../Game/Game.component'
import Footer from '../Footer/Footer.compoent'
const Layout = () => {

    const [myChoice, setChoice] = useState("");
    const [score, setScore] = useState(0)
    return (

        <>
            <Modal />
            <Header />
            <Board />
            <Game />

            <Footer />
        </>
    )
}

export default Layout