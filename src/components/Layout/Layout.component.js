import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
            <div className="container">
                <Modal />
                <Header score={score} />
                <Routes>
                    <Route path='/board' element={<Board setChoice={setChoice} />} />


                    <Route path='/game' element={<Game myChoice={myChoice} Score={score} setScore={setScore} />} />


                </Routes>

            </div>

            <Footer />


        </>
    )
}

export default Layout