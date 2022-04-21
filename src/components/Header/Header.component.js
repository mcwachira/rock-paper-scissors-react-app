import React from 'react'
import classes from './Header.module.css'
import iconHeader from '../../assets/logo.svg'
const Header = ({ score }) => {
    return (
        <div className={classes.scoreboard}>

            <img src={iconHeader} alt=" title icon" />
            <div className={classes.score}>
                <h3>
                    SCORE
                </h3>

                <span className={classes.resultsValue}>
                    {score}
                </span>
            </div>


        </div >
    )
}

export default Header