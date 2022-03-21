import { useState } from 'react'
import "../ActiveButtons/ActiveTabButtons.css"

const ActiveTabButtons = ({ handleChange }) => {
    const [state, setState] = useState(true);
    const [stateOne, setStateOne] = useState(true);

    const handleButton = e => {
        if (e.target.name === 'ThePressPage') {
            setState(state ? "active" : "")
        } else if (e.target.name === 'NewsPageItems') {
            setState(state ? "inactive" : "")
        }


        if (e.target.name === 'NewsPageItems') {
            setStateOne(stateOne ? "active" : "")
        } else if (e.target.name === 'ThePressPage') {
            setStateOne(stateOne ? "inactive" : "")
        }
    }
    return (

        <div className='the-news-page__buttons' >

            <button
                name="NewsPageItems"
                className={`the-news-page__button ${stateOne}`}
                onClick={(e) => { handleChange(e); handleButton(e); }}>
                In the News
            </button>
            <button name="ThePressPage"
                className={`the-news-page__button ${state}`}
                onClick={(e) => { handleChange(e); handleButton(e); }}>
                Press
            </button>

        </div >
    )
}

export default ActiveTabButtons 
