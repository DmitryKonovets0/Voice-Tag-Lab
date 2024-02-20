import {Component} from "react";

import logo from '../../icons/logo.svg'
import message from '../../icons/message.svg'

import './promo.scss'
import './promo-media.scss'

export default class Promo extends Component {
    menuOpen = () => {
        // eslint-disable-next-line no-restricted-globals
        if(screen.width < 993) {
            document.querySelector('.menu').style.left = '0'
        }
    }
    menuClose = (e) => {
        if (!e.target.closest('.header')) {
            document.querySelector('.menu').style.left = '-100%';
        }
        e.stopPropagation();
    }
    render() {
        return(
            <div className="promo"onClick={this.menuClose} >
                <div className="container">
                    <div className="menu">
                        <div className="close-wrap">
                            <div onClick={this.menuClose} className="close"><span>&times;</span></div>
                        </div>
                        <li><a href="#">About us</a></li>
                        <hr/>
                        <li><a href="#">Tags Samples</a></li>
                        <hr/>
                        <li><a href="#">Pricing</a></li>
                        <hr/>
                        <li><a href="#">Reviews</a></li>
                        <hr/>
                        <li><a href='#'>FAQ</a></li>
                        <hr/>
                        <li><a href='#'>Contacts</a></li>
                        <hr/>
                    </div>
                    <div className="header">
                    <img onClick={this.menuOpen} src={logo} alt="logo" className="header__logo"/>
                        <ul className='header__menu'>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Tags Samples</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Contacts</a></li>
                        </ul>
                        <div className="burger">
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>

                        <div className="header__btn-wrapper">
                            <div className='message'><img src={message} alt=""/></div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">
                                <button className='header__btn'>Get your tag</button>
                            </a>
                        </div>
                    </div>
                    <div className="promo__title">
                        Voice <br/> Tag Lab
                    </div>
                    <div className="promo__subtitle">
                        The best custom voice tags online
                    </div>
                    <div className="promo__descr">
                        Voice Tag is a necessity for every music producer. We offer a wide range of voices and
                        professional service. Brand your sound with us! Become known
                    </div>
                    <a href="#">
                        <button className="promo__btn">
                            Get your custom tag
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}
