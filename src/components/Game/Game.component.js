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



    const Results = () => {


        switch (myChoice + house) {
            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
                setWinner("win");
                setScore(Score + 1)

                break;

            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                setWinner("loose");
                setScore(Score - 1)

                break;
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
                setWinner("draw")

                break;
            default:
                break;
        }


    }


    useEffect(() => {
        Results(myChoice, house)
    })

    return (
        <div className={classes.game}>
            myChoice: {myChoice} <br />
            house choice:{house}<br />

            Results :{winner === 'win' && <h2> You  Win</h2>}
            {winner === 'loose' && <h2> You  Loose</h2>}
            {winner === 'draw' && <h2>         It's a tie!</h2>}


        </div>
    )
}

export default Game
