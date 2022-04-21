import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

        console.log(myChoice)
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

    const restartGame = () => {
        setHousePick();
        console.log('restart game')
    }

    return (

        <>

            <div className={classes.game}>


                <div className={classes.userHand}>
                    <h1>
                        You Picked
                    </h1>

                    <div className={`${classes.icon} classes.${myChoice}`}></div>
                    {console.log()}
                </div>

                <div className={classes.results}>
                    <div className={classes.headingResults}>

                        Results: {winner === 'win' && <h2> You  Win</h2>}
                        {winner === 'loose' && <h2> You  Loose</h2>}
                        {winner === 'draw' && <h2>         It's a tie!</h2>}


                    </div>

                    <button className={classes.restartButton} onClick={restartGame}>
                        <Link to='/board'>
                            Restart
                        </Link>

                    </button>
                </div>

                <div className={classes.houseHand}>
                    <h1>
                        House Picked
                    </h1>

                    <div className={`${classes.housePick} ${classes.icon}`}></div>
                </div>


            </div>
        </>

    )
}

export default Game
