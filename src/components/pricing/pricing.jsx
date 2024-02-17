import {Component} from "react";

import './pricing.scss'
import './pricing-media.scss'


export default class Pricing extends Component {

    render() {
        return(
            <div className="pricing">
                <div className="container">
                    <div className="pricing__wrapper">
                        <div className="first__col">
                            <div className="pricing__title">Pricing</div>
                            <div className="first__item"><span>1 Voice</span> <br/> You can pick any voice</div>
                            <div className="first__item"><span>2 Voices</span> <br/> You can pick any 2 voices</div>
                            <div className="first__item"><span>3 Voices</span> <br/> You can pick any 3 voices</div>
                            <div className="first__item"><span>4 Voices</span> <br/> You can pick all 4 voices</div>
                        </div>
                        {/*<div className="t"></div>*/}
                        <div className="col">
                            <div className="tag">1 Tag</div>
                            <div className="item__price ">
                                <div className="old-price">$31</div>
                                <div className="new__price">$24.90</div>
                            </div>
                            <div className="clean__item"></div>
                            <div className="clean__item"></div>
                            <div className="clean__item"></div>
                        </div>
                        <div className="col">
                            <div className="tag">2 Tag</div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$39.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$44.90</div>
                            </div>
                            <div className="clean__item"></div>
                            <div className="clean__item"></div>
                        </div>
                        <div className="col">
                            <div className="tag">3 Tag</div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$49.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$59.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$64.90</div>
                            </div>
                            <div className="clean__item"></div>
                        </div>
                        <div className="col">
                            <div className="tag">4 Tag</div>
                            <div  className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$59.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$69.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$74.90</div>
                            </div>
                            <div className="item__price">
                                <div className="old-price">$31</div>
                                <div className="new__price">$79.90</div>
                            </div>
                        </div>
                        <button className="pricing__btn">
                            Get your custom tag
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}