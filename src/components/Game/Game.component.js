import React, { useEffect, useState } from 'react'
import classes from './Game.module.css'
const Game = ({ myChoice, Score, setScore }) => {

    const [house, setHousePick] = useState("")
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
                return;

            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                setWinner("loose");
                setScore(Score - 1)
                return;
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
                setWinner("draw")
                return;
            default:
                break;
        }
    }

    // const Results = () => {
    //     console.log(house)

    //     if (myChoice === "paper" && house === "scissors") {
    //         setWinner("loose");
    //         setScore(Score - 1);
    //     }
    //     if (myChoice === "paper" && house === "rock") {
    //         setWinner("win");
    //         setScore(Score + 1);
    //     }
    //     if (myChoice === "paper" && house === "paper") {
    //         setWinner("draw")
    //     }
    //     if (myChoice === "rock" && house === "scissors") {
    //         setWinner("win");
    //         setScore(Score + 1);
    //     }
    //     if (myChoice === "rock" && house === "paper") {
    //         setWinner("loose");
    //         setScore(Score - 1);
    //     }
    //     if (myChoice === "rock" && house === "rock") {
    //         setWinner("draw")
    //     }
    //     if (myChoice === "scissors" && house === "scissors") {


    //         setWinner("draw")
    //     }
    //     if (myChoice === "scissors" && house === "rock") {
    //         setWinner("loose");
    //         setScore(Score - 1);
    //     }
    //     if (myChoice === "scissors" && house === "paper") {
    //         setWinner("win");
    //         setScore(Score + 1);
    //     }
    // };




    useEffect(() => {
        Results()
    }, [house])

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
