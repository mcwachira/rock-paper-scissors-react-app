import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Board.module.css'
import Triangle from '../../assets/bg-triangle.svg'

const Board = ({ setChoice }) => {

    const handleClick = (e) => {
        setChoice(e.target.dataset.id)
    }
    return (
        <div className={classes.board}>

            <img src={Triangle} alt=" Triangle Background" className={classes.Triangle} />
            <div className={classes.boardItems}>


                <Link to='/game'>
                    <div data-id="paper" onClick={handleClick} className={
                        `${classes.icon}
                        ${classes.iconPaper}
                        `

                    }>          </div>
                </Link>
                <Link to='/game'>
                    <div data-id="scissors" onClick={handleClick} className={
                        `${classes.icon}
                        ${classes.iconScissors}
                        `

                    }>


                    </div>
                </Link>
                <Link to='/game'>
                    <div data-id="rock" onClick={handleClick} className={
                        `${classes.icon}
                        ${classes.iconRock}
                        `

                    }>


                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Board