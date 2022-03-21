import React from 'react'
import '../Popup/Popup.css'


function Popup(props) {

    return (props.trigger) ? (

        <div className='popup'>
            <div className='popup-main'>
                <div className='popup__text'>
                    <h1>Do you need micro business loans?</h1>
                    <p>Quick loans for businesses, invoice financing and flexible loans</p>
                </div>
                <div className='popup__container'>
                    <div className='popup__container__left'>
                        <img className='popup__image' src='../../../../assets/PopupImgs/violet.9459dd7e.svg' alt='popup' />
                        <button className='popup__button__right' onClick={() => props.setTrigger(false)}><p>Not really</p></button>
                    </div>
                    <div className='popup__container__right'>
                        <img className='popup__image' src='../../../../assets/PopupImgs/green.f01efa95.svg' alt='popup' />
                        <button className='popup__button__left' onClick={() => props.setTrigger(false)}><p>Yes! Extra money</p></button>
                    </div>
                </div>
                {props.children}
            </div>
        </div>

    ) : "";
}

export default Popup