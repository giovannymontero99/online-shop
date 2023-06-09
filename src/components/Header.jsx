import React from 'react';
import logo from '../assets/logo.svg';
import whatsapp from '../assets/whatsapp.svg';
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [btnActive, setBtnActive] = useState(false);
    return (
        <header className='Header' >
            <a href='#welcome' className='header-logo-content' >
                <img src={logo} alt="logo" />
            </a>


            {
                /*
                <nav className='header-nav-content' >
                    <button className={`hamburger hamburger--collapse ${btnActive ? `is-active` : ``}`} onClick={() => setBtnActive(!btnActive)} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <ul className='nav-ul' style={btnActive ? { right: '0' } : { right: '-16rem' }} onClick={() => setBtnActive(!btnActive)} >
                        <li><Link to="#algunlado" > Audifonos </Link></li>
                        <li><Link to="#algunlado"> Para PC </Link></li>
                        <li><Link to="#algunlado"> Cargadores </Link></li>
                        <li><Link to="#algunlado"> Quienes Somos </Link></li>
                    </ul>
                </nav>*/
            }


            <div className='header-whastapp-logo' >
                <a href="https://api.whatsapp.com/send?phone=573134973973">
                    <img src={whatsapp} alt="whatsapp logo" />
                </a>
            </div>
        </header>
    );
}

export default Header;