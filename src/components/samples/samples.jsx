import {Component} from "react";

import man from '../../img/bg/manBg.svg'
import womanPing from '../../img/bg/womanPingBg.svg'
import womanBlue from '../../img/bg/womanBlueBg.svg'
import kid from '../../img/bg/kidBg.svg'

import './samples.scss'

export default class Samples extends Component {
    render() {
        return(
            <div className="samples">
                <div className="container">
                    <h2 className='samples__title'>Tags Samples</h2>
                    <div className="samples__wrapper">
                        <div className="wrapper__item">
                            <img src={man} alt="" className="wrapper__img"/>
                            <div className="wrapper__heading">Male voice</div>
                        </div>
                        <div className="wrapper__item">
                            <img src={womanPing} alt="" className="wrapper__img"/>
                            <div className="wrapper__heading"> Female voice</div>
                        </div>
                        <div className="wrapper__item">
                            <img src={womanBlue} alt="" className="wrapper__img"/>
                            <div className="wrapper__heading">Anime voice</div>
                        </div>
                        <div className="wrapper__item">
                            <img src={kid} alt="" className="wrapper__img"/>
                            <div className="wrapper__heading">Kid voice</div>
                        </div>
                    </div>
                    <div className="samples__opportunity">
                        <div className="samples__futures">
                            <div className="futures__title">Futures</div>
                            <div className="futures__text"><span>Multiple recordings</span> <br/> We record each day at least 3 times so you can choose the best one</div>
                            <div className="futures__text"><span>FX + Mixed + Dry</span> <br/> We send 3 variations of each voice tag: with sound FX, basic mixing, and the dry recording</div>
                            <div className="futures__text"><span>HQ WAV files</span> <br/> You will receive your voice tag(s) in the highest quality. WAV format 24 Bit</div>
                            <div className="futures__text"><span>Fully Custom</span> <br/> You can request any effects, style and all you want!</div>
                        </div>
                        <div className="samples__ultimate">
                            <div className="ultimate__title">Ultimate Offer For Music Producers</div>
                            <div className="ultimate__text">Ultimate Offer For Music Producers</div>
                            <div className="ultimate__text">Custom Voice Tag + 10GB of drum, loop and midi kits</div>
                            <div className="ultimate_btn">
                                <button className="ultimate__btn">I want it</button>
                                <div className="ultimate__stroke"></div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}