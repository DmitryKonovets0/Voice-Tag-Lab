import {Component} from "react";

import one from '../../icons/1.svg'
import two from '../../icons/2.svg'
import three from '../../icons/3.svg'
import exclamationMark from '../../icons/exclamationMark.svg'

import './how.scss'
import './how-media.scss'

export default class How extends Component {
    render() {
        return(
            <div className="how">
            <div className="container">
                <div className="how__title">How it works?</div>
                <div className="how__wrapper">
                    <div className="how__wrapper_item">
                        <div className="how__wrapper_number"><img src={one} alt="" className="how__wrapper_img"/></div>
                        <div className="how__wrapper_descr">Listen to the audio  samples and choose  which voice(s) you  want
                        </div>
                    </div>
                    <div className="how__wrapper_item">
                        <div className="how__wrapper_number"><img src={two} alt="" className="how__wrapper_img"/></div>
                        <div className="how__wrapper_descr">Choose your package  in the "Prices" section  and click on the "Get your  custom tag" button
                        </div>
                    </div>
                    <div className="how__wrapper_item">
                        <div className="how__wrapper_number"><img src={three} alt="" className="how__wrapper_img"/></div>
                        <div className="how__wrapper_descr">Fill out the form.  Include your tag  phrase(s), any requests  like mood, effects, etc.
                        </div>
                    </div>
                    <div className="how__wrapper_wrapper">
                        <img src={exclamationMark} className="how__wrapper_wrapper_img"></img>
                        <div className="how__wrapper_wrapper_descr">Don’t’ worry about the pronunciation of your name.  We will contact you to clarify it.</div>
                        <img src={exclamationMark} className="how__wrapper_wrapper_img"></img>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}