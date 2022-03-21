import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container-left'>
                    <div className='logo'></div>
                    <p>Discover a <span className='world-logo'>world</span> of opportunities</p>
                </div>

                <div className='footer-container-right'>
                    <div className='footer-container-right__block'>
                        <span>Company</span>
                        <ul className='footer-nav'>
                            <li className='footer-nav__item'> <p>About</p></li>
                            <li className='footer-nav__item'> <p>Team</p></li>
                            <li className='footer-nav__item'> <p>Write for us</p></li>
                            <li className='footer-nav__item'> <p>Advertise</p></li>
                            <li className='footer-nav__item'> <p>Newsroom</p></li>
                            <li className='footer-nav__item'> <p>Careers</p></li>
                            <li className='footer-nav__item'> <p>Contact Us</p></li>
                        </ul>
                    </div>
                    <div className='footer-container-right__block'>
                        <span>Product</span>
                        <ul className='footer-nav'>
                            <li className='footer-nav__item'> <p>Platform</p></li>
                            <li className='footer-nav__item'> <p>Dealzone</p></li>
                            <li className='footer-nav__item'> <p>Directory</p></li>
                            <li className='footer-nav__item'> <p>Pricing</p></li>
                            <li className='footer-nav__item'> <p>All categories</p></li>
                            <li className='footer-nav__item'> <p>Solutions</p></li>
                            <li className='footer-nav__item'> <p>Get listed</p></li>
                        </ul>
                    </div>
                    <div className='footer-container-right__block'>
                        <span>Resources</span>
                        <ul className='footer-nav'>
                            <li className='footer-nav__item'> <p>Blog</p></li>
                            <li className='footer-nav__item'> <p>Support</p></li>
                            <li className='footer-nav__item'> <p>Privacy Policy</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>© Copyright 2022 Enterprise League. All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer