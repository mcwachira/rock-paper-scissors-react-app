import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Board.module.css'

const Board = ({ setChoice }) => {

    const handleClick = (e) => {
        setChoice(e.target.dataset.id)
    }
    return (
        <div className={classes.board}>

            <Link to='/game'>
                <div data-id="paper" onClick={handleClick} className={classes.iconPaper}>
                    Paper

                </div>
            </Link>
            <Link to='/game'>
                <div data-id="scissors" onClick={handleClick} className={classes.iconScissors}>
                    scissors

                </div>
            </Link>
            <Link to='/game'>
                <div data-id="rock" onClick={handleClick} className={classes.iconRock}>
                    rock

                </div>
            </Link>
        </div>
    )
}

export default Board