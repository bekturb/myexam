import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/Header.scss'

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <Link to='/' className="header__logo">BOOKShop</Link>
                    <div className='header__basket'>
                        <FontAwesomeIcon icon={faCartShopping} className="header__basket--item"/>
                        <h3 className='header__basket--title'>Корзина</h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;