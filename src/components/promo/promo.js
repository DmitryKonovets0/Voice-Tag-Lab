import {Component} from "react";

import logo from '../../icons/logo.svg'
import message from '../../icons/message.svg'
import btn from '../../icons/btn.svg'
import './promo.scss'

export default class Promo extends Component {
    render() {
        return(
            <div className="promo">
                <div className="container">
                    <div className="header">
                        <img src={logo} alt="logo" className="header__logo"/>
                        <ul className='header__menu'>
                            <li>About us</li>
                            <li>Tags Samples</li>
                            <li>Pricing</li>
                            <li>Reviews</li>
                            <li>FAQ</li>
                            <li>Contacts</li>
                            <li><img src={message} alt=""/></li>
                            <li>
                                <div className="header__btn_wrapper">
                                    <img src={btn} alt=""/>
                                    <a href="#">
                                        <button className='header__btn'>Get your tag</button>
                                    </a>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
