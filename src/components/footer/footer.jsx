import {Component} from "react";

import logo from '../../icons/logo.svg'
import instargram from '../../icons/instagramm.svg'
import youtube from '../../icons/youtube.svg'
import facebook from '../../icons/facebook.svg'
import x from '../../icons/x.svg'

import './footer.scss'
import './footer-media.scss'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: window.innerWidth < 618
        }
    }
    render() {
        const {mobile} = this.state
        return(
            <footer className="footer">
                <div className="container">
                <img src={logo} alt="logo" className="footer__logo"/>
                    <div className="footer__text-wrapper">
                        {mobile ? (
                            <div className="mobile">
                                <div className="footer__text-item">About us</div>
                                <div className="footer__text-item">Tags Samples</div>
                                <div className="footer__text-item">Pricing</div>
                            </div>
                        ) : (
                            <>
                                <div className="footer__text-item">About us</div>
                                <div className="footer__text-item">Tags Samples</div>
                                <div className="footer__text-item">Pricing</div>
                            </>
                        )}
                        {mobile ? (
                            <div className="mobile">
                                <div className="footer__text-item">Reviews</div>
                                <div className="footer__text-item">FAQ</div>
                                <div className="footer__text-item">Contacts</div>
                            </div>
                        ) : (
                            <>
                                <div className="footer__text-item">Reviews</div>
                                <div className="footer__text-item">FAQ</div>
                                <div className="footer__text-item">Contacts</div>
                            </>
                        )}

                    </div>
                    <div className="footer__social-wrapper">
                        <img src={youtube} alt="" className="footer__social-item"/>
                        <img src={instargram} alt="" className="footer__social-item"/>
                        <img src={facebook} alt="" className="footer__social-item"/>
                        <img src={x} alt="" className="footer__social-item"/>
                    </div>
                    <div className="footer__link-wrapper">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="footer__link-item">Terms of service</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="footer__link-item">Privacy policy</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="footer__link-item">Refund policy</a>
                </div>
                </div>
            </footer>
        )
    }
}