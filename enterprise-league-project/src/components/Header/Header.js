import React from 'react'
import "../Header/Header.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src='../../../assets/HeaderImgs/Full logo with white background.png' alt='logo el' id='logo-img'></img>
            </div>
            <div className='header_nav'>

                <div className='nav_menu'>
                    <div className='nav_menu__item'>
                        <span id='span1'>Product</span>
                        < KeyboardArrowDownIcon />

                    </div>
                    <div className='nav_menu__item'>
                        <span id='span1'>Resources</span>

                        < KeyboardArrowDownIcon />
                    </div>
                    <div className='nav_menu__item'>
                        <span id='span1'>Company</span>
                        < KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className='right_menu_buttons'>
                    <button className='button_a'>Log in</button>
                    <button className='button_b'>Get Started</button>
                </div>

            </div>
            <div className='header-mobile-size'>
                <img src='../../../assets/HeaderImgs/icons8-hamburger-menu-30.png' alt='hamburger menu' />
            </div>
        </div>
    )
}

export default Header