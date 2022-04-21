import React, { useEffect, useState } from 'react'
import classes from './Game.module.css'
const Game = ({ myChoice, Score, setScore }) => {

    const [house, setHousePick] = useState(0)
    const [winner, setWinner] = useState('')

    const housePick = () => {
        const choices = ['paper', 'scissors', 'rock']
        setHousePick(choices[Math.floor(Math.random() * choices.length)])
    }

    useEffect(() => {
        housePick()
    }, [])
    return (
        <div className={classes.game}>
            myChoice: {myChoice} <br />
            house choice:{house}<br />

        </div>
    )
}

export default Game