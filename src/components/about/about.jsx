import {Component} from "react";

import car from '../../img/car.png'
import fox from '../../img/Fox.png'
import djMixer from '../../img/djMixer.png'
import cards from '../../img/cards.png'
import road from '../../img/road.png'
import headphone from '../../img/headphone.png'

import './about.scss'

export default class About extends Component{

    render() {
        return (
            <div className="about">
                <div className="container">
                <div className="about__wrapper">
                <div className="about__title">About us</div>
                    <div className="about__wrapper_items">
                        <div className="about__card">
                            <img src={car} alt="" className="about__img"/>
                            <div className="about__heading">Fast Delivery</div>
                            <div className="about__descr">.WAV files will be sent 96 hours after your payment is processed. The download link with your voice tag order will be sent to your email</div>
                        </div>
                        <div className="about__card">
                            <img src={cards} alt="" className="about__img"/>
                            <div className="about__heading">Safety Payment</div>
                            <div className="about__descr">Pay via PayPal or with your credit or debit card. We also have some additional payment options in the order form</div>
                        </div>
                        <div className="about__card">
                            <img src={headphone} alt="" className="about__img"/>
                            <div className="about__heading">Package Deals</div>
                            <div className="about__descr">Need multiple voice tags? We got special bulk pricing options. Check the <span>«Prices»</span> section for more info</div>
                        </div>
                        <div className="about__card">
                            <img src={road} alt="" className="about__img"/>
                            <div className="about__heading">4 Voice Actor Options</div>
                            <div className="about__descr">Choose from female, male, kid or anime voice. Or get multiple tags with different voices with package deals</div>
                        </div>
                        <div className="about__card">
                            <img src={djMixer} alt="" className="about__img"/>
                            <div className="about__heading">Wet + Dry Recordings</div>
                            <div className="about__descr">You will receive each tag mixed and unmixed, and recorded 3-5 times. Use one or use them all!</div>
                        </div>
                        <div className="about__card">
                            <img src={fox} alt="" className="about__img"/>
                            <div className="about__heading">2 Free Revisions</div>
                            <div className="about__descr">Not the right sound for your brand? If you aren't happy with your voice tag, we'll re-record it or change the effects!</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}